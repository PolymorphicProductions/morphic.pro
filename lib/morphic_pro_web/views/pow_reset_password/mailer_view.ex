defmodule MorphicProWeb.PowResetPassword.MailerView do
  use MorphicProWeb, :mailer_view

  def subject(:reset_password, _assigns), do: "Reset password link"
end
