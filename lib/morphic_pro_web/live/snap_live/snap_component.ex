defmodule MorphicProWeb.SnapLive.SnapComponent do
  use MorphicProWeb, :live_component
  alias MorphicPro.Blog
  alias MorphicPro.Blog.Snap

  @impl true
  def handle_event(
        "inc_snap_likes",
        %{"snap-id" => snap_id},
        socket
      ) do
    {:ok, _snap} = Blog.inc_likes(%Snap{id: snap_id})
    {:noreply, socket}
  end
end
