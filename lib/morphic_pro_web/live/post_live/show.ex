defmodule MorphicProWeb.PostLive.Show do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Post
  alias MorphicPro.Accounts

  @impl true
  def mount(%{"slug" => slug}, session, socket) do
    if connected?(socket),
      do: Phoenix.PubSub.subscribe(MorphicPro.PubSub, "post:#{slug}")

    if user = session["user_token"] && Accounts.get_user_by_session_token(session["user_token"]) do
      {:ok, assign(socket, current_user: user)}
    else
      {:ok, assign(socket, current_user: nil)}
    end
  end

  @impl true
  def handle_params(
        %{"slug" => slug},
        _session,
        %{assigns: %{current_user: current_user}} = socket
      ) do

    post = Blog.get_post!(slug, current_user, preload: [:tags])
    {:noreply,
     socket
     |> assign(:post, post)
     |> assign(:page_title, page_title(socket.assigns.live_action, post.title))
     |> assign(:page_description, page_description(socket.assigns.live_action, post.excerpt))
     |> assign(:page_img, post.thumb_img)
    }
  end

  defp page_title(:show, title), do: title
  defp page_title(:edit, _), do: "Edit Post"
  defp page_description(:show, description), do: description
  defp page_description(:edit, _), do: "Editing Post"

  @impl true
  def handle_info({:post_liked, post}, socket) do
    {:noreply, assign(socket, post: post)}
  end
  def handle_info({:post_edited, post}, socket) do
    {:noreply, assign(socket, post: post)}
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

  def handle_event("delete", %{"id" => id}, %{assigns: %{current_user: current_user}} = socket) do
    with :ok <- Bodyguard.permit(Blog, :delete, current_user, nil) do
      {:ok, _post} = Blog.get_post!(id, current_user) |> Blog.delete_post()

      socket = socket
      |> put_flash(:info, "Post deleted successfully.")
      |> redirect(to: Routes.post_index_path(socket, :index))

      {:noreply, socket}
    else
      _err -> {:noreply, socket}
    end
  end
end
