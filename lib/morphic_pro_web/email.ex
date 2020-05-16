defmodule MorphicProWeb.Email do
  @moduledoc """
    This module builds emails and renderes their layouts
  """

  use Bamboo.Phoenix, view: MorphicProWeb.EmailView
  import Bamboo.Email

  alias MorphicProWeb.EmailLayoutView

  def confirmation_email(%{email: recipient}, url) do
    email("Account Confirmation", recipient, url)
    |> render("registration_email.html")
  end

  def update_email_email(%{email: recipient}, url) do
    email("Account Change | Email Update", recipient, url)
    |> render("update_email_email.html")
  end

  @spec pass_reset_email(%{email: any}, any) :: Bamboo.Email.t()
  def pass_reset_email(%{email: recipient}, url) do
    email("Password Reset Request", recipient, url)
    |> render("pass_reset.html")
  end

  defp email(subject, recipient, url) do
    new_email()
    |> from({"Morphic.Pro", "no-reply@morphic.pro"})
    |> put_html_layout({EmailLayoutView, "email.html"})
    |> to(recipient)
    |> assign(:email, recipient)
    |> assign(:url, url)
    |> subject(subject)
  end
end
