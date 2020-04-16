defmodule MorphicProWeb.SnapView do
  use MorphicProWeb, :view

  def render("script.new.html", _assigns), do: render("script.edit.html", %{})

  def render("script.edit.html", _assigns) do
    {
      :safe,
      """
      <script type="text/javascript" src="#{
        Routes.static_path(MorphicProWeb.Endpoint, "/js/vendors~snap_edit.bundle.js")
      }"></script>
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
    content_tag :div, class: "mt-8" do
      [
        link to: Routes.snap_path(MorphicProWeb.Endpoint, :edit, snap), class: "btn-blue mr-2" do
        [
          content_tag(:i, "", class: "far fa-edit mr-1"),
          "Edit"
        ]
        end,
        link to: Routes.snap_path(MorphicProWeb.Endpoint, :delete, snap), class: "btn-red", method: :delete, data: [confirm: "Delete Snap 🗑: #{snap.id} ?"] do
          [
            content_tag(:i, "", class: "far fa-trash-alt mr-1"),
            "Delete"
          ]
        end
      ]
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
