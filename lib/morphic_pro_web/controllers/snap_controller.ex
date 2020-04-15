defmodule MorphicProWeb.SnapController do
  use MorphicProWeb, :controller

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Snap

  plug MorphicPro.Plug.NavbarSmall when action in [:new, :create, :edit, :update]

  def action(conn, _) do
    apply(__MODULE__, action_name(conn), [conn, conn.params, conn.assigns])
  end

  def index(conn, params, %{current_user: current_user}) do
    {snaps, dissolver} = Blog.list_snaps(params, current_user)
    render(conn, "index.html", snaps: snaps, dissolver: dissolver)
  end

  def new(conn, _params, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :create_snap, current_user, nil),
         changeset <- Blog.change_snap(%Snap{}) do
      render(conn, "new.html", changeset: changeset)
    end
  end

  def create(conn, %{"snap" => snap_params}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :create, current_user, nil) do
      case Blog.create_snap(snap_params) do
        {:ok, snap} ->
          conn
          |> put_flash(:info, "Snap created successfully.")
          |> redirect(to: Routes.snap_path(conn, :show, snap))

        {:error, %Ecto.Changeset{} = changeset} ->
          render(conn, "new.html", changeset: changeset)
      end
    end
  end

  def show(conn, %{"id" => id}, %{current_user: current_user}) do
    snap = Blog.get_snap!(id, current_user, preload: [:tags])

    conn
    |> assign(:nav_class, "navbar navbar-absolute navbar-fixed navbar-wbg")
    |> render("show.html",
      snap: snap
    )
  end

  def edit(conn, %{"id" => id}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :edit, current_user, nil) do
      snap = Blog.get_snap!(id, current_user, preload: [:tags])
      changeset = Blog.change_snap(snap)
      render(conn, "edit.html", snap: snap, changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "snap" => snap_params}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :update, current_user, nil) do
      snap = Blog.get_snap!(id, current_user, preload: [:tags])

      case Blog.update_snap(snap, snap_params) do
        {:ok, snap} ->
          conn
          |> put_flash(:info, "Snap updated successfully.")
          |> redirect(to: Routes.snap_path(conn, :show, snap))

        {:error, %Ecto.Changeset{} = changeset} ->
          render(conn, "edit.html", snap: snap, changeset: changeset)
      end
    end
  end

  def delete(conn, %{"id" => id}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :delete, current_user, nil) do
      snap = Blog.get_snap!(id, current_user, preload: [:tags])
      {:ok, _snap} = Blog.delete_snap(snap)

      conn
      |> put_flash(:info, "Snap deleted successfully.")
      |> redirect(to: Routes.snap_path(conn, :index))
    end
  end
end
