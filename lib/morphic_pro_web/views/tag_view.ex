defmodule MorphicProWeb.TagView do
  use MorphicProWeb, :view

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
    |> Enum.map(fn tag ->
      content_tag(
        :span,
        link("##{tag}",
          to: Routes.post_tag_path(MorphicProWeb.Endpoint, :show_post, tag),
          class: "inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200"
        )
      )
    end)
  end
end
