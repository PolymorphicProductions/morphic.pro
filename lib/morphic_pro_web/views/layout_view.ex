defmodule MorphicProWeb.LayoutView do
  # FYI: If you add any logic besure to unignore from coveralls.json
  use MorphicProWeb, :view

  def render_existing_nested(
        %{
          :phoenix_template => phoenix_template,
          :phoenix_view => phoenix_view
        },
        tag,
        assigns
      ) do
    render_existing(phoenix_view, tag <> phoenix_template, assigns)
  end
end
