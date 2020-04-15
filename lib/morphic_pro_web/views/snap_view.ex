defmodule MorphicProWeb.SnapView do
  use MorphicProWeb, :view

  def render("script.new.html", _assigns), do: render("script.edit.html", %{})

  def render("script.edit.html", _assigns) do
    {
      :safe,
      """
      <script type="text/javascript" src="#{
        Routes.static_path(MorphicProWeb.Endpoint, "/js/vendors~post_edit~snap_edit.bundle.js")
      }"></script>
      <script type="text/javascript" src="#{
        Routes.static_path(MorphicProWeb.Endpoint, "/js/snap_edit.bundle.js")
      }"></script>
      """
    }
  end

  def admin_links(%{admin: true}, snap) do
    content_tag :div, class: "my-20" do
      content_tag :div, class: "container px-3 mx-auto" do
        [
          link("Edit", to: Routes.snap_path(MorphicProWeb.Endpoint, :edit, snap), class: "mr-2"),
          link("Delete",
            to: Routes.snap_path(MorphicProWeb.Endpoint, :delete, snap),
            method: :delete,
            data: [confirm: "Delete Snap 🗑: #{snap.id} ?"]
          )
        ]
      end
    end
  end

  def admin_links(nil, _snap), do: nil

  # def parse_tags(tags) do
  #   Enum.map(tags, fn tag ->
  #     content_tag(
  #       :span,
  #       link("##{tag.name}",
  #         to: Routes.snap_tag_path(MorphicProWeb.Endpoint, :show_snap, tag.name),
  #         class: "inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200"
  #       )
  #     )
  #   end)
  # end

  def parse_tags(content) do
    content
    |> String.replace(~r/#(\w*)/, "<a href='/snaps/tag/\\1'>#\\1</a>")
  end
end
