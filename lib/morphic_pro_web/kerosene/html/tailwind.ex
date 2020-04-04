defmodule MorphicProWeb.Kerosene.HTML.Tailwind do
  @moduledoc """
  A custom theme for Kerosene using Tailwind
  """

  @behaviour Kerosene.HTML.Theme

  use Phoenix.HTML

  @impl Kerosene.HTML.Theme
  def generate_links(page_list, additional_class) do
    content_tag :div, class: build_html_class(additional_class), role: "pagination" do
      for {label, _page, url, current} <- page_list do
        link("#{label}",
          to: url,
          class:
            "text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 " <>
              if_active_class(current)
        )
      end
    end
  end

  defp build_html_class(additional_class) do
    String.trim("text-center pagination " <> additional_class)
  end

  defp if_active_class(true), do: "bg-gray-300"
  defp if_active_class(_), do: ""
end
