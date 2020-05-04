defmodule MorphicProWeb.PostLive.FormComponent do
  use MorphicProWeb, :live_component

  alias MorphicPro.Blog

  @impl true
  def update(%{post: post} = assigns, socket) do
    changeset = Blog.change_post(post)

    {:ok,
     socket
     |> assign(assigns)
     |> assign(:changeset, changeset)}
  end

  @impl true
  def handle_event("validate", %{"post" => post_params}, socket) do
    changeset =
      socket.assigns.post
      |> Blog.change_post(post_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"post" => post_params}, socket) do
    save_post(socket, socket.assigns.action, post_params)
  end

  defp save_post(%{assigns: %{post: post, current_user: current_user}} = socket, :edit, post_params) do
    with :ok <- Bodyguard.permit(Blog, :update, current_user, nil) do
      case Blog.update_post(post, post_params) do
        {:ok, post} ->

          Phoenix.PubSub.broadcast(
            MorphicPro.PubSub,
            "posts",
            {:post_edited, post}
          )

          Phoenix.PubSub.broadcast(
            MorphicPro.PubSub,
            "post:"<>post.slug,
            {:post_edited, post}
          )

          {:noreply,
           socket
           |> put_flash(:info, "Post updated successfully")
           |> push_redirect(to: Routes.post_show_path(socket, :show, post))}

        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, :changeset, changeset)}
      end
    else
      _ ->
      socket
       |> put_flash(:error, "Nope")
       |> push_redirect(to: Routes.post_index_path(socket, :index))
    end
  end

  defp save_post(%{assigns: %{current_user: current_user}} = socket, :new, post_params) do
    with :ok <- Bodyguard.permit(Blog, :update, current_user, nil) do
      case Blog.create_post(post_params) do
        {:ok, post} ->
          Phoenix.PubSub.broadcast(
            MorphicPro.PubSub,
            "posts",
            {:new_post, post}
          )

          {:noreply,
           socket
           |> put_flash(:info, "Post created successfully")
           |> push_redirect(to: Routes.post_show_path(socket, :show, post))}

        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, :changeset, changeset)}
      end
    else
      _ ->
      socket
       |> put_flash(:error, "Nope")
       |> push_redirect(to: Routes.post_index_path(socket, :index))
    end
  end
end
