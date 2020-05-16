defmodule MorphicProWeb.LiveHelpers do
  import Phoenix.LiveView.Helpers
  import Phoenix.HTML.Link
  import Phoenix.HTML

  alias MorphicProWeb.Router.Helpers, as: Routes

  def parse_markdown(text) do
    # TODO: Capture the 3 items in the tuple that comes from `Earmark.as_html` and send to logs
    case Earmark.as_html(text, pure_links: true) do
      {:ok, html_doc, _} ->
        html_doc

      {:error, _html_doc, error_messages} ->
        error_messages
    end
  end

  def parse_post_tags(tags) do
    Enum.map(tags, fn tag ->
      ~E"""
      <span>
        <%= live_redirect("##{tag.name}", to: "/posts/tags/#{tag.name}", class: "inline-block py-2 px-2 text-sm font-semibold text-gray-700 bg-gray-200") %>
      </span>
      """
    end)
  end

  def parse_tags(content) do
    content
    |> String.replace(~r/#(\w*)/, "<a href='/snaps/tags/\\1'>#\\1</a>")
  end

  def parse_date(d), do: Timex.format!(d, "{Mshort} {D}, {YYYY}")

  def admin_links(%{admin: true}, %MorphicPro.Blog.Snap{} = snap, socket) do
    ~E"""
      <%= live_redirect(to: Routes.snap_action_path(socket, :edit, snap), class: "btn-orange focus:outline-none mr-2") do %>
        <i class="fas fa-edit"></i> Edit
      <% end %>

      <%= link(to: "#", phx_click: "delete", phx_value_id: snap.id, data: [confirm: "Delete Snap 🗑?"], class: "btn-red focus:outline-none") do %>
        <i class="fas fa-trash"></i> Delete
      <% end %>
    """
  end

  def admin_links(%{admin: true}, %MorphicPro.Blog.Post{} = post, socket) do
    ~E"""
      <%= live_redirect(to: Routes.post_action_path(socket, :edit, post), class: "btn-orange focus:outline-none mr-2") do %>
        <i class="fas fa-edit"></i> Edit
      <% end %>

      <%= link(to: "#", phx_click: "delete", phx_value_id: post.slug, data: [confirm: "Delete Post 🗑: #{post.title} ?"], class: "btn-red focus:outline-none") do %>
        <i class="fas fa-trash"></i> Delete
      <% end %>
    """
  end

  def admin_links(_, _, _), do: nil

  def post_paginate_helper(socket, action, nil) do
    &(Routes.post_index_path(socket, action, &1))
  end

  def post_paginate_helper(socket, action, scope) do
    &(Routes.post_index_path(socket, action, scope, &1))
  end

  def snap_paginate_helper(socket, action, nil) do
    &(Routes.snap_index_path(socket, action, &1))
  end

  def snap_paginate_helper(socket, action, scope) do
    &(Routes.snap_index_path(socket, action, scope, &1))
  end
end
