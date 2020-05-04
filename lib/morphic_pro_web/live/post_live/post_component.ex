defmodule MorphicProWeb.PostLive.PostComponent do
  use MorphicProWeb, :live_component
  alias MorphicPro.Blog
  alias MorphicPro.Blog.Post

  @impl true
  def handle_event(
        "inc_post_likes",
        %{"post-id" => post_id},
        socket
      ) do
    {:ok, _post} = Blog.inc_likes(%Post{id: post_id})
    {:noreply, socket}
  end
end
