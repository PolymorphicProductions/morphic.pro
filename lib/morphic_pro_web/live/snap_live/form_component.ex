defmodule MorphicProWeb.SnapLive.FormComponent do
  use MorphicProWeb, :live_component

  alias MorphicPro.Blog

  @impl true
  def update(%{snap: snap} = assigns, socket) do
    changeset = Blog.change_snap(snap)

    {:ok,
     socket
     |> assign(assigns)
     |> assign(:changeset, changeset)}
  end

  @impl true
  def handle_event("validate", %{"snap" => snap_params}, socket) do
    changeset =
      socket.assigns.snap
      |> Blog.change_snap(snap_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"snap" => snap_params}, socket) do
    save_snap(socket, socket.assigns.action, snap_params)
  end

  defp save_snap(%{assigns: %{snap: snap, current_user: current_user}} = socket, :edit, snap_params) do
    with :ok <- Bodyguard.permit(Blog, :update, current_user, nil) do
      case Blog.update_snap(snap, snap_params) do
        {:ok, snap} ->

          Phoenix.PubSub.broadcast(
            MorphicPro.PubSub,
            "snaps",
            {:snap_edited, snap}
          )

          Phoenix.PubSub.broadcast(
            MorphicPro.PubSub,
            "snap:"<>snap.id,
            {:snap_edited, snap}
          )

          {:noreply,
           socket
           |> put_flash(:info, "Snap updated successfully")
           |> push_redirect(to: Routes.snap_show_path(socket, :show, snap))}

        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, :changeset, changeset)}
      end
    else
      _ ->
      socket
       |> put_flash(:error, "Nope")
       |> push_redirect(to: Routes.snap_index_path(socket, :index))
    end
  end

  defp save_snap(%{assigns: %{current_user: current_user}} = socket, :new, snap_params) do
    with :ok <- Bodyguard.permit(Blog, :update, current_user, nil) do
      case Blog.create_snap(snap_params) do
        {:ok, snap} ->
          Phoenix.PubSub.broadcast(
            MorphicPro.PubSub,
            "snaps",
            {:new_snap, snap}
          )

          {:noreply,
           socket
           |> put_flash(:info, "Snap created successfully")
           |> push_redirect(to: Routes.snap_show_path(socket, :show, snap))}

        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, :changeset, changeset)}
      end
    else
      _ ->
      socket
       |> put_flash(:error, "Nope")
       |> push_redirect(to: Routes.snap_index_path(socket, :index))
    end
  end
end
