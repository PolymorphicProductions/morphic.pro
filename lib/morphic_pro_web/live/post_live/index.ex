defmodule MorphicProWeb.PostLive.Index do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Accounts

  @impl true
  def mount(_params, session, socket) do
    if connected?(socket),
      do: Phoenix.PubSub.subscribe(MorphicPro.PubSub, "posts")

    current_user =
      session["user_token"] && Accounts.get_user_by_session_token(session["user_token"])

    {:ok, assign(socket, current_user: current_user)}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :index, params) do
    {posts, dissolver} = Blog.list_posts(params, current_user)

    socket
    |> assign(page_title: "Listing Posts")
    |> assign(dissolver: dissolver)
    |> assign(scope: nil)
    |> assign(posts: posts)
  end

  # TODO: Scope taged posts to a user
  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :tag, %{"tag" => tag} = params) do
    {tag, dissolver} = Blog.get_post_for_tag!(tag, current_user, params)

    socket
    |> assign(page_title: "Listing Posts")
    |> assign(dissolver: dissolver)
    |> assign(scope: tag.name)
    |> assign(posts: tag.posts)

  end

  @impl true
  def handle_info({:post_liked, %{id: id} = post}, %{assigns: %{posts: posts}} = socket) do
    posts = Enum.map(posts, fn
        %{id: ^id} -> post
        p -> p
      end)

    {:noreply, assign(socket, posts: posts)}
  end

  def handle_info({:post_edited, %{id: id} = post}, %{assigns: %{posts: posts}} = socket) do
    posts = Enum.map(posts, fn
        %{id: ^id} -> post
        p -> p
      end)

    {:noreply, assign(socket, posts: posts)}
  end
end
