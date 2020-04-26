defmodule MorphicProWeb.SnapLive do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Snap

  @impl true
  def mount(
        _params,
        %{
          "snap_id" => snap_id,
          "snap_likes" => snap_likes
        },
        socket
      ) do
    if connected?(socket),
      do: Phoenix.PubSub.subscribe(MorphicPro.PubSub, "snap:like:#{snap_id}")

    {:ok, assign(socket, snap_likes: snap_likes, snap_id: snap_id)}
  end

  @impl true
  def handle_event("inc_snap_likes", _value, %{assigns: %{snap_id: snap_id}} = socket) do
    {:ok, snap_likes} = Blog.inc_likes(%Snap{id: snap_id})
    {:noreply, assign(socket, :snap_likes, snap_likes)}
  end

  @impl true
  def handle_info({:snap_liked, snap_likes}, socket) do
    {:noreply, assign(socket, :snap_likes, snap_likes)}
  end

  @impl true
  def render(assigns) do
    ~L"""
    <button class="btn-blue text-xs focus:outline-none text-center" phx-throttle="500" phx-click="inc_snap_likes">
      <i class="fas fa-heart"></i> <%= @snap_likes %>
    </button>
    """
  end
end
