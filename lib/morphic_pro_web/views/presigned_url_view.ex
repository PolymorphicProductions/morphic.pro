defmodule MorphicProWeb.PresignedUrlView do
  use MorphicProWeb, :view

  def render("gen_presigned_url.json", %{url: url}) do
    %{data: %{url: url}}
  end
end
