defmodule MorphicProWeb.PageLive.Index do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.{Post, Snap}
  alias MorphicPro.Accounts

  @impl true
  def mount(_params, session, socket) do
    if connected?(socket) do
      Phoenix.PubSub.subscribe(MorphicPro.PubSub, "posts")
      Phoenix.PubSub.subscribe(MorphicPro.PubSub, "snaps")
    end

    if user = session["user_token"] && Accounts.get_user_by_session_token(session["user_token"]) do
      {:ok, assign(socket, current_user: user)}
    else
      {:ok, assign(socket, current_user: nil)}
    end
  end

  @impl true
  def handle_params(_params, _session, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action)}
  end

  defp apply_action(socket, :index) do
    assign(
      socket,
      posts: Blog.list_latest_posts(),
      snaps: Blog.list_latest_snaps()
    )
  end

  @impl true
  def handle_event(
        "inc_post_likes",
        %{"post-id" => post_id},
        socket
      ) do
    {:ok, _post} = Blog.inc_likes(%Post{id: post_id})
    {:noreply, socket}
  end

  @impl true
  def handle_event(
        "inc_snap_likes",
        %{"snap-id" => snap_id},
        socket
      ) do
    {:ok, _snap} = Blog.inc_likes(%Snap{id: snap_id})
    {:noreply, socket}
  end

  @impl true
  def handle_info({:post_liked, %{id: id} = post}, %{assigns: %{posts: posts}} = socket) do
    posts = Enum.map(posts, fn
        %{id: ^id} -> post
        p -> p
      end)

    {:noreply, assign(socket, posts: posts)}
  end
  def handle_info({:snap_liked, %{id: id} = snap}, %{assigns: %{snaps: snaps}} = socket) do
    snaps = Enum.map(snaps, fn
        %{id: ^id} -> snap
        p -> p
      end)

    {:noreply, assign(socket, snaps: snaps)}
  end


end
