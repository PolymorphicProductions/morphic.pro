defmodule MorphicProWeb.Dissolver.HTML.Tailwind do
  @behaviour Dissolver.HTML.Theme
  use Phoenix.HTML
  import Phoenix.LiveView.Helpers

  @moduledoc """
  This is a theme to support Tailwind css.
  https://tailwindcss.com/


  page_list looks like

  `
  {"First", 1, "/products?category=25&page=1", false},
  {"<", 6, "/products?category=25&page=6", false},
  {2, 2, "/products?category=25&page=2", false},
  ...
  {12, 12, "/products?category=25&page=12", false},
  {">", 8, "/products?category=25&page=8", false},
  {"Last", 16, "/products?category=25&page=16", false}
  `
  """

  @impl Dissolver.HTML.Theme
  def generate_links(page_list, additional_class) do
    content_tag :div, class: build_html_class(additional_class), role: "pagination" do
      for {label, _page, url, is_current} <- page_list do
        live_patch("#{label}",
          to: url,
          class:
            hide_for_mobile(is_current, label) <>
              "text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 " <>
              if_active_class(is_current)
        )
      end
    end
  end

  defp build_html_class(additional_class) do
    String.trim("text-center pagination #{additional_class}")
  end

  defp if_active_class(true), do: "bg-gray-300"
  defp if_active_class(_), do: ""

  defp hide_for_mobile(false, page) when is_number(page), do: "hidden md:inline "
  defp hide_for_mobile(_, _), do: ""
end
