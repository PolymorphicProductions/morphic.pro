defmodule MorphicProWeb.Pow.Mailer do
  use Pow.Phoenix.Mailer

  alias MorphicProWeb.{Email, Mailer}

  # Pow callbacks
  defdelegate cast(email), to: Email, as: :pow_email
  defdelegate process(email), to: Mailer, as: :deliver_now

  # If we want to unblock the delivery 
  #defdelegate process(email), to: Mailer, as: :deliver_later

end