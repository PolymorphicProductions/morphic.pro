defmodule MorphicProWeb.Kerosene.HTML.Tailwind do
  @behaviour Kerosene.HTML.Theme

  use Phoenix.HTML

  @impl Kerosene.HTML.Theme
  def generate_links(page_list, additional_class) do
    content_tag :div, class: build_html_class(additional_class), role: "pagination" do
      for {label, _page, url, current} <- page_list do
        link "#{label}", to: url, class: "text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 "  <> build_html_class(current)
      end
    end
  end

  defp build_html_class(additional_class \\ "") do
    String.trim("text-center pagination #{additional_class}")
  end
  defp build_html_class(true), do: "bg-gray-300"
  defp build_html_class(false), do: ""

end
