defmodule MorphicProWeb.PowEmailConfirmation.MailerView do
  use MorphicProWeb, :mailer_view

  def subject(:email_confirmation, _assigns), do: "Confirm your email address"
end
