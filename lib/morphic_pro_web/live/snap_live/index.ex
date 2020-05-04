defmodule MorphicProWeb.SnapLive.Index do
  use MorphicProWeb, :live_view

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Snap
  alias MorphicPro.Accounts

  @impl true
  def mount(_params, session, socket) do
    if connected?(socket),
      do: Phoenix.PubSub.subscribe(MorphicPro.PubSub, "snaps")

    current_user =
      session["user_token"] && Accounts.get_user_by_session_token(session["user_token"])

    {:ok, assign(socket, current_user: current_user)}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :index, params) do
    {snaps, dissolver} = Blog.list_snaps(params, current_user)

    socket
    |> assign(page_title: "Listing Snaps")
    |> assign(dissolver: dissolver)
    |> assign(scope: nil)
    |> assign(snaps: snaps)
  end

  # TODO: scope taged snaps to user current_user
  defp apply_action(%{assigns: %{current_user: current_user}} = socket, :tag, %{"tag" => tag} = params) do
    {tag, dissolver} = Blog.get_snap_for_tag!(tag, current_user, params)

    socket
    |> assign(page_title: "Listing Posts")
    |> assign(dissolver: dissolver)
    |> assign(scope: tag.name)
    |> assign(snaps: tag.snaps)

  end


  @impl true
  def handle_info({:snap_liked, %{id: id} = snap}, %{assigns: %{snaps: snaps}} = socket) do
    snaps = Enum.map(snaps, fn
        %{id: ^id} -> snap
        p -> p
      end)

    {:noreply, assign(socket, snaps: snaps)}
  end

  def handle_info({:snap_edited, %{id: id} = snap}, %{assigns: %{snaps: snaps}} = socket) do
    snaps = Enum.map(snaps, fn
        %{id: ^id} -> snap
        p -> p
      end)

    {:noreply, assign(socket, snaps: snaps)}
  end

  @impl true
  def handle_event(
        "inc_snap_likes",
        %{"snap-id" => snap_id},
        %{assigns: %{snaps: snaps}} = socket
      ) do
    {:ok, new_snap} = Blog.inc_likes(%Snap{id: snap_id})

    snaps =
      Enum.map(snaps, fn
        %{id: ^snap_id} ->
          new_snap

        p ->
          p
      end)

    {:noreply, assign(socket, snaps: snaps)}
  end

end
