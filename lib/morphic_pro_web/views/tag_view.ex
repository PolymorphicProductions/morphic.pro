defmodule MorphicProWeb.TagView do
  use MorphicProWeb, :view
  import Kerosene.HTML

  def format_date(dt) do
    Timex.format!(dt, "{Mshort} {D}, {YYYY}")
  end

  def time_ago(time) do
    {:ok, relative_str} = time |> Timex.format("{relative}", :relative)

    relative_str
  end

  def parse_tags(nil), do: nil
  def parse_tags(content) do
    content
    |> String.split(", ")
    |> IO.inspect
    |> Enum.map(fn tag ->
      content_tag(:span, link("##{tag}", to: Routes.post_tag_path(MorphicProWeb.Endpoint, :show_post, tag), class: "inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200"))
    end)

    #content_tag(:span, link("##{tag.name}", to: Routes.post_tag_path(MorphicProWeb.Endpoint, :show_post, tag.name), class: "inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200"))

  end

  def parse_markdown(text) do
    case Earmark.as_html(text) do
      {:ok, html_doc, []} ->
        html_doc

      {:error, _html_doc, error_messages} ->
        error_messages
    end
  end
end
