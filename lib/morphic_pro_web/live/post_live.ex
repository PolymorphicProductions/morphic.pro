defmodule MorphicProWeb.PostLive do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Post

  @impl true
  def mount(
        _params,
        %{
          "post_id" => post_id,
          "post_likes" => post_likes
        },
        socket
      ) do
    if connected?(socket),
      do: Phoenix.PubSub.subscribe(MorphicPro.PubSub, "post:like:#{post_id}")

    {:ok, assign(socket, post_likes: post_likes, post_id: post_id)}
  end

  @impl true
  def handle_event("inc_post_likes", _value, %{assigns: %{post_id: post_id}} = socket) do
    {:ok, post_likes} = Blog.inc_likes(%Post{id: post_id})
    {:noreply, assign(socket, :post_likes, post_likes)}
  end

  @impl true
  def handle_info({:post_liked, post_likes}, socket) do
    {:noreply, assign(socket, :post_likes, post_likes)}
  end

  @impl true
  def render(assigns) do
    ~L"""
    <button class="btn-blue text-xs focus:outline-none text-center" phx-click="inc_post_likes">
      <i class="fas fa-heart"></i> <%= @post_likes %>
    </button>
    """
  end
end
