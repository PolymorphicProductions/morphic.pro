defmodule MorphicProWeb.PageView do
  use MorphicProWeb, :view

  def parse_tags(tags) do
    Enum.map(tags, fn tag ->
      content_tag(:span, link("##{tag.name}", to: Routes.post_tag_path(MorphicProWeb.Endpoint, :show_post, tag.name), class: "inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200"))
    end)
  end
end
