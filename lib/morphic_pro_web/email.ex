defmodule MorphicProWeb.Email do
  use Bamboo.Phoenix, view: MorphicProWeb.EmailView
  import Bamboo.Email
  alias Pow.Phoenix.Mailer.Mail
  alias MorphicProWeb.EmailLayoutView

  # 
  def pow_email(%Mail{ subject: subject, user: %{ email: recipient }} = powEmail ) do
    # We can see that the Pow.Phoenix.Mailer.Mail has 
    # already rendered the template defined in its views. 
    # I'd like to find a way to completely bypass Pow.Phoenix.Mailer.Mail's view/templates
    # since I feel I have more control and its more consolidated since my email is not 
    # exclusive to pow
    #IO.inspect(powEmail) 

    base_email()
    |> to(recipient)
    |> assign(:email, powEmail.user.email)
    |> assign(:confirm_link, powEmail.assigns[:url])
    |> subject(subject)
    |> set_template()
  end

  defp set_template(%{subject: "Confirm your email address"} = email), do: render(email, "registration_email.html")
  defp set_template(%{subject: "Reset password link"} = email), do: render(email, "registration_email.html")

  defp base_email do
    new_email()
    |> from({"Morphic.Pro", "no-reply@morphic.pro"})
    |> put_html_layout({EmailLayoutView, "email.html"})
  end

end