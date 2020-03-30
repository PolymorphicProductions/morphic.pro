defmodule MorphicProWeb.PostView do
  use MorphicProWeb, :view

  def parse_markdown(text) do
    case Earmark.as_html(text) do
      {:ok, html_doc, []} ->
        html_doc

      {:error, _html_doc, error_messages} ->
        error_messages
    end
  end

  def render("script.new.html", _assigns), do: render("script.edit.html", %{})

  def render("script.edit.html", _assigns) do
    {
      :safe,
      """
      <script type="text/javascript" src="#{
        Routes.static_path(MorphicProWeb.Endpoint, "/js/vendors~post_edit.bundle.js")
      }"></script>
      <script type="text/javascript" src="#{
        Routes.static_path(MorphicProWeb.Endpoint, "/js/post_edit.bundle.js")
      }"></script>
      """
    }
  end
end
