defmodule MorphicProWeb.UserRegistrationController do
  use MorphicProWeb, :controller

  alias MorphicPro.Accounts
  alias MorphicPro.Accounts.User

  def new(conn, _params) do
    %{changes: %{captcha: %{text: text}}} = changeset = Accounts.new_user_registration(%User{})

    conn
    |> Plug.Conn.put_session(:captcha_store, text)
    |> render("new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    captcha_text = Plug.Conn.get_session(conn, :captcha_store)

    case Accounts.register_user(user_params, captcha_text) do
      {:ok, user} ->
        Accounts.deliver_user_confirmation_instructions(
          user,
          &Routes.user_confirmation_url(conn, :confirm, &1),
          &MorphicProWeb.Email.confirmation_email/2,
          &MorphicProWeb.Mailer.deliver_later/1
        )

        conn =
          put_flash(
            conn,
            :info,
            "Registration successful, please check for a confirmation email to complete login."
          )

        conn
        |> delete_session(:captcha_store)
        |> redirect(to: Routes.page_index_path(conn, :index))

      {:error, %{changes: %{captcha: %{text: text}}} = changeset} ->
        conn
        |> Plug.Conn.put_session(:captcha_store, text)
        |> render("new.html", changeset: changeset)
    end
  end
end
