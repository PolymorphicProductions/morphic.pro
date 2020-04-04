defmodule MorphicProWeb.PostView do
  use MorphicProWeb, :view

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
          link("Delete",
            to: Routes.post_path(MorphicProWeb.Endpoint, :delete, post),
            method: :delete,
            data: [confirm: "Delete Post 🗑: #{post.title} ?"
          ])
        ]
      end
    end
  end

  def admin_links(nil, post), do: nil

  def parse_tags(tags) do
    Enum.map(tags, fn tag ->
      content_tag(
        :span,
        link("##{tag.name}",
          to: Routes.post_tag_path(MorphicProWeb.Endpoint, :show_post, tag.name),
          class: "inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200"
        )
      )
    end)
  end
end
