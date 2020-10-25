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

        %{id: id} = snap = Blog.get_snap!(slug, current_user, preload: [:tags])

        {:ok, id} = Ecto.UUID.dump(id)

        sql = "
        select *
        from (
            select id, published_at, inserted_at, draft, large_img,
                    lag(id)  over (order by published_at desc, inserted_at desc) as prev,
                    lead(id) over (order by published_at desc, inserted_at desc) as next
                    from snaps where draft is false and published_at <= now()
            ) x
        where $1 IN (id, prev, next)
        "

        rows = Ecto.Adapters.SQL.query!(
          MorphicPro.Repo,
          sql,
          [id]
        ).rows

        prev_large_img = case rows |> Enum.filter(fn [_snap_id, _, _, _draft, _img, _prev, next] -> id == next end) do
          [] ->
            nil
          [[_, _, _, _, prev_large_img, _, _]] ->
            prev_large_img
        end

        next_large_img = case rows |> Enum.filter(fn [_snap_id, _, _, _draft, _img, prev, _next] -> id == prev end) do
          [] ->
            nil
          [[_, _, _, _, next_large_img, _, _]] ->
            next_large_img
        end

    {:noreply,
     socket
     |> assign(:page_title, page_title(socket.assigns.live_action))
     |> assign(:page_description, page_description(socket.assigns.live_action, snap.body))
     |> assign(:page_image, snap.thumb_img)
     |> assign(:snap, snap)
     |> assign(:prev_large_img, prev_large_img)
     |> assign(:next_large_img, next_large_img)
     |> nav_assigns()}
  end

  defp nav_assigns(%{assigns: %{live_action: :show}} = socket) do
    socket
    |> assign(:nav_class, "navbar navbar-absolute navbar-fixed navbar-wbg")
  end

  defp nav_assigns(socket), do: socket

  defp page_title(:show), do: "Show Snap"
  defp page_title(:edit), do: "Edit Snap"

  defp page_description(:show, description), do: description
  defp page_description(:edit, _), do: "Editing Snap"

  @impl true
  def handle_info({:snap_liked, snap}, socket) do
    {:noreply, assign(socket, snap: snap)}
  end

  @impl true
  def handle_event(
        "keydown",
        %{"key" => "ArrowRight"},
        %{assigns: %{snap: %{id: id}}} = socket
      ) do
    {:ok, id} = Ecto.UUID.dump(id)

    sql = "
    select *
    from (
        select id, published_at, inserted_at, draft,
                lag(id)  over (order by published_at desc, inserted_at desc) as prev,
                lead(id) over (order by published_at desc, inserted_at desc) as next
                from snaps where draft is false and published_at <= now()
        ) x
    where $1 IN (id, prev, next)
    "

    [%{next: next, prev: _prev}] = Ecto.Adapters.SQL.query!(
      MorphicPro.Repo,
      sql,
      [id]
    ).rows
    |> Enum.filter(fn [snap_id, _, _, _prev, _next,_] ->
      id == snap_id
    end)
    |> Enum.map(fn
    [_snap_id, _, _, _, nil, next] ->
      {:ok, next} = Ecto.UUID.cast(next)
      %{prev: nil, next: next}

    [_snap_id, _, _, _, prev, nil] ->
      {:ok, prev} = Ecto.UUID.cast(prev)
      %{prev: prev, next: nil}

    [_snap_id, _, _, _, prev, next,] ->
      {:ok, prev} = Ecto.UUID.cast(prev)
      {:ok, next} = Ecto.UUID.cast(next)
      %{prev: prev, next: next}
    end)

    IO.inspect(next)

    if next == nil do
      {:noreply, socket}
    else
      {:noreply, push_redirect(socket, to: MorphicProWeb.Router.Helpers.snap_show_path(socket, :show, next))}
    end
  end

  def handle_event(
        "keydown",
        %{"key" => "ArrowLeft"},
        %{assigns: %{snap: %{id: id}}} = socket
      ) do
    {:ok, id} = Ecto.UUID.dump(id)

    sql = "
    select *
    from (
        select id, published_at, inserted_at, draft,
                lag(id)  over (order by published_at desc, inserted_at desc) as prev,
                lead(id) over (order by published_at desc, inserted_at desc) as next
                from snaps where draft is false and published_at <= now()
        ) x
    where $1 IN (id, prev, next)
    "

    [%{next: _next, prev: prev}] = Ecto.Adapters.SQL.query!(
      MorphicPro.Repo,
      sql,
      [id]
    ).rows
    |> Enum.filter(fn [snap_id, _, _, _prev, _next,_] ->
      id == snap_id
    end)
    |> Enum.map(fn
    [_snap_id, _, _, _, nil, next] ->
      {:ok, next} = Ecto.UUID.cast(next)
      %{prev: nil, next: next}

    [_snap_id, _, _, _, prev, nil] ->
      {:ok, prev} = Ecto.UUID.cast(prev)
      %{prev: prev, next: nil}

    [_snap_id, _, _, _, prev, next,] ->
      {:ok, prev} = Ecto.UUID.cast(prev)
      {:ok, next} = Ecto.UUID.cast(next)
      %{prev: prev, next: next}
    end)

    IO.inspect("WTF!----")
    IO.inspect(prev)
    require Logger
    Logger.info("WTF!")

    if prev == nil do
      {:noreply, socket}
    else
      {:noreply, push_redirect(socket, to: MorphicProWeb.Router.Helpers.snap_show_path(socket, :show, prev))}
    end
  end

  def handle_event("keydown", _stuff, socket) do
    {:noreply, socket}
  end

  def handle_event(
        "inc_snap_likes",
        %{"snap-id" => snap_id},
        socket
      ) do
    {:ok, _snap} = Blog.inc_likes(%Snap{id: snap_id})
    {:noreply, socket}
  end

  def handle_event("delete", %{"id" => id}, %{assigns: %{current_user: current_user}} = socket) do
    with :ok <- Bodyguard.permit(Blog, :delete, current_user, nil) do
      {:ok, _snap}  = Blog.get_snap!(id, current_user) |> Blog.delete_snap()

      socket = socket
      |> put_flash(:info, "Snap deleted successfully.")
      |> redirect(to: Routes.snap_index_path(socket, :index))

      {:noreply, socket}
    else
      _err -> {:noreply, socket}
    end
  end
end
