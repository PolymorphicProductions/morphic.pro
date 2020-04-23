defmodule MorphicProWeb.UserRegistrationView do
  use MorphicProWeb, :view

  def image(data) do
    pic = Base.encode64(data)

    "<img class=\"inline\" src=\"data:image/gif;base64," <>
      pic <> "\" height=\"70\" width=\"200\" />"
  end
end
