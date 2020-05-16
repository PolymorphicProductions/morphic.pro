defmodule MorphicProWeb.SnapLive.Action do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Snap
  alias MorphicPro.Accounts

  @impl true
  def mount(_params, session, socket) do
    if user = session["user_token"] && Accounts.get_user_by_session_token(session["user_token"]) do
      {:ok, assign(socket, current_user: user)}
    else
      {:ok, assign(socket, current_user: nil)}
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


    with :ok <- Bodyguard.permit(Blog, :create_snap, current_user, nil) ,
      snap <- Blog.get_snap!(slug, current_user, preload: [:tags]) do

      socket
      |> assign(:page_title, "Edit Snap")
      |> assign(:snap, snap)

      else
        _ ->
        socket
        |> put_flash(:error, "Nope")
        |> push_redirect(to: Routes.snap_index_path(socket, :index))
    end
  end

  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :new, _params) do
    with :ok <- Bodyguard.permit(Blog, :create_snap, current_user, nil) do
      socket
      |> assign(:page_title, "New Snap")
      |> assign(:snap, %Snap{})

      else
        _ ->
        socket
         |> put_flash(:error, "Nope")
         |> push_redirect(to: Routes.snap_index_path(socket, :index))
    end
  end

  @impl true
  def handle_info({:snap_liked, snap}, socket) do
    {:noreply, assign(socket, snap: snap)}
  end
end
