defmodule MorphicProWeb.PostController do
  use MorphicProWeb, :controller

  alias MorphicPro.Blog
  alias MorphicPro.Blog.Post

  plug MorphicPro.Plug.NavbarSmall when action in [:new, :create, :edit, :update]

  def action(conn, _) do
    apply(__MODULE__, action_name(conn), [conn, conn.params, conn.assigns])
  end

  def index(conn, params, %{current_user: current_user}) do
    {posts, kerosene} = Blog.list_posts(params, current_user)
    render(conn, "index.html", posts: posts, kerosene: kerosene)
  end

  def new(conn, _params, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :create_post, current_user, nil),
         changeset <- Blog.change_post(%Post{}) do
      render(conn, "new.html", changeset: changeset)
    end
  end

  def create(conn, %{"post" => post_params}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :create, current_user, nil) do
      case Blog.create_post(post_params) do
        {:ok, post} ->
          conn
          |> put_flash(:info, "Post created successfully.")
          |> redirect(to: Routes.post_path(conn, :show, post))

        {:error, %Ecto.Changeset{} = changeset} ->
          render(conn, "new.html", changeset: changeset)
      end
    end
  end

  def show(conn, %{"slug" => slug}, %{current_user: current_user}) do
    # changeset = Blog.change_comment(%Comment{})
    post = Blog.get_post!(slug, current_user, preload: [:tags])

    conn
    |> assign(:nav_class, "navbar navbar-absolute navbar-fixed")
    |> render("show.html",
      post: post
      # changeset: changeset
    )
  end

  def edit(conn, %{"slug" => slug}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :edit, current_user, nil) do
      post = Blog.get_post!(slug, current_user, preload: [:tags])
      changeset = Blog.change_post(post)
      render(conn, "edit.html", post: post, changeset: changeset)
    end
  end

  def update(conn, %{"slug" => slug, "post" => post_params}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :update, current_user, nil) do
      post = Blog.get_post!(slug, current_user, preload: [:tags])

      case Blog.update_post(post, post_params) do
        {:ok, post} ->
          conn
          |> put_flash(:info, "Post updated successfully.")
          |> redirect(to: Routes.post_path(conn, :show, post))

        {:error, %Ecto.Changeset{} = changeset} ->
          render(conn, "edit.html", post: post, changeset: changeset)
      end
    end
  end

  def delete(conn, %{"slug" => slug}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Blog, :delete, current_user, nil) do
      post = Blog.get_post!(slug, current_user, preload: [:tags])
      {:ok, _post} = Blog.delete_post(post)

      conn
      |> put_flash(:info, "Post deleted successfully.")
      |> redirect(to: Routes.post_path(conn, :index))
    end
  end
end
