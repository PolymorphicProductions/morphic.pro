defmodule MorphicProWeb.UserRegistrationController do
  use MorphicProWeb, :controller

  alias MorphicPro.Accounts
  alias MorphicPro.Accounts.User

  def new(conn, _params) do
    changeset = Accounts.change_user_registration(%User{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    case Accounts.register_user(user_params) do
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

        redirect(conn, to: Routes.page_path(conn, :index))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end
end
