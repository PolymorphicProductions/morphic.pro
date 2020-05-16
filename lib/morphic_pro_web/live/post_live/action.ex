defmodule MorphicProWeb.PostLive.Action do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Post
  alias MorphicPro.Accounts

  @impl true
  def mount(_params, session, socket) do
    if user = session["user_token"] && Accounts.get_user_by_session_token(session["user_token"]) do
      {:ok, assign(socket, current_user: user, post: %Post{})}
    else
      {:ok, assign(socket, current_user: nil, post: %Post{})}
    end
  end

  @impl true
  def handle_params(
        params,
        _session,
        socket
      ) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :edit, %{"slug" => slug}) do


    with :ok <- Bodyguard.permit(Blog, :create_post, current_user, nil) ,
      post <- Blog.get_post!(slug, current_user, preload: [:tags]) do

      socket
      |> assign(:page_title, "Edit Post")
      |> assign(:post, post)

      else
        _ ->
        socket
        |> put_flash(:error, "Nope")
        |> push_redirect(to: Routes.post_index_path(socket, :index))
    end
  end

  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :new, _params) do
    with :ok <- Bodyguard.permit(Blog, :create_post, current_user, nil) do
      socket
      |> assign(:page_title, "New Post")
      |> assign(:post, %Post{})

      else
        _ ->
        socket
         |> put_flash(:error, "Nope")
         |> push_redirect(to: Routes.post_index_path(socket, :index))
    end
  end

  @impl true
  def handle_info({:post_liked, post}, socket) do
    {:noreply, assign(socket, post: post)}
  end
end
