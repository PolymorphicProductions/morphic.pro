defmodule MorphicProWeb.SnapLive.Show do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Snap
  alias MorphicPro.Accounts

  @impl true
  def mount(%{"slug" => slug}, session, socket) do
    if connected?(socket),
      do: Phoenix.PubSub.subscribe(MorphicPro.PubSub, "snap:#{slug}")

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
    {:noreply,
     socket
     |> assign(:page_title, page_title(socket.assigns.live_action))
     |> assign(:snap, Blog.get_snap!(slug, current_user, preload: [:tags]))
     |> nav_assigns()
    }
  end
  defp nav_assigns(%{assigns: %{live_action: :show}} = socket) do
    socket
    |> assign(:nav_class, "navbar navbar-absolute navbar-fixed navbar-wbg")
  end
  defp nav_assigns(socket), do: socket

  defp page_title(:show), do: "Show Snap"
  defp page_title(:edit), do: "Edit Snap"

  @impl true
  def handle_info({:snap_liked, snap}, socket) do
    {:noreply, assign(socket, snap: snap)}
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

  def handle_event("delete", %{"id" => id}, %{assigns: %{current_user: current_user}} = socket) do

    # with :ok <- Bodyguard.permit(Blog, :delete, current_user, nil) do
    #   snap = Blog.get_snap!(slug, current_user, preload: [:tags])
    #   {:ok, _snap} = Blog.delete_snap(snap)

    #   conn
    #   |> put_flash(:info, "Snap deleted successfully.")
    #   |> redirect(to: Routes.snap_path(conn, :index))
    # end

    snap = Blog.get_snap!(id, current_user)
    {:ok, _} = Blog.delete_snap(snap)

    {:noreply, push_redirect(socket, to: Routes.snap_index_path(socket, :index))}
  end
end
