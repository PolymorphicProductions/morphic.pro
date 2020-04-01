defmodule MorphicProWeb.PostView do
  use MorphicProWeb, :view

  import Kerosene.HTML

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

  def admin_links(%{admin: true}, post) do
    content_tag :div, class: "my-20" do
      content_tag :div, class: "container px-3 mx-auto" do
        [
          link("Edit", to: Routes.post_path(MorphicProWeb.Endpoint, :edit, post), class: "mr-2"),
          link("Delete", to: Routes.post_path(MorphicProWeb.Endpoint, :delete, post), method: :delete, data: [confirm: "Delete Post 🗑: #{post.title} ?"])
        ]
      end
    end

  end
  def admin_links(nil, post), do: nil

end
