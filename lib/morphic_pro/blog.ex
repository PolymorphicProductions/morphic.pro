defmodule MorphicPro.Blog do
  @moduledoc """
  The Blog context.
  """

  import Ecto.Query, warn: false
  alias MorphicPro.Repo

  alias __MODULE__.{Post, Snap, Tag}

  defdelegate authorize(action, user, params), to: MorphicPro.Policy

  @doc """
  Returns the list of lastest published posts.
  Limited to 4 latest

  ## Examples

      iex> list_latest_posts()
      [%Post{}, ...]

  """
  def list_latest_posts do
    Post
    |> from(limit: 4, preload: [:tags])
    |> Repo.where_published()
    |> Repo.order_by_published_at()
    |> Repo.all()
  end

  def list_latest_snaps do
    Snap
    |> from(limit: 4, preload: [:tags])
    |> Repo.where_published()
    |> Repo.order_by_published_at()
    |> Repo.all()
  end

  @doc """
  Returns the list of posts.

  ## Examples

      iex> list_posts()
      [%Post{}, ...]

  """
  def list_posts(params, user) do
    Post
    |> from(preload: [:tags])
    |> Bodyguard.scope(user)
    |> Repo.order_by_published_at()
    |> Dissolver.paginate(params)
  end

  def list_snaps(params, user) do
    Snap
    |> from(preload: [:tags])
    |> Bodyguard.scope(user)
    |> Repo.order_by_published_at()
    |> Dissolver.paginate(params)
  end

  @doc """
  Gets a single post.

  Raises `Ecto.NoResultsError` if the Post does not exist.

  ## Examples

      iex> get_post!("foo")
      %Post{}

      iex> get_post!("bar")
      ** (Ecto.NoResultsError)

  """

  def get_post!(slug, current_user, options \\ []) do
    preload = Keyword.get(options, :preload, [])

    Post
    |> Repo.by_slug(slug)
    |> from(preload: ^preload)
    |> Bodyguard.scope(current_user)
    |> Repo.one!()
  end

  def get_snap!(uuid, current_user, options \\ []) do
    preload = Keyword.get(options, :preload, [])

    Snap
    |> Repo.by_id(uuid)
    |> from(preload: ^preload)
    |> Bodyguard.scope(current_user)
    |> Repo.one!()
  end

  @doc """
  Creates a post.

  ## Examples

      iex> create_post(%{field: value})
      {:ok, %Post{}}

      iex> create_post(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  def create_snap(attrs \\ %{}) do
    %Snap{}
    |> Snap.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a post.

  ## Examples

      iex> update_post(post, %{field: new_value})
      {:ok, %Post{}}

      iex> update_post(post, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_post(%Post{} = post, attrs) do
    post
    |> Post.changeset(attrs)
    |> Repo.update()
  end

  def update_snap(%Snap{} = snap, attrs) do
    snap
    |> Snap.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Post.

  ## Examples

      iex> delete_post(post)
      {:ok, %Post{}}

      iex> delete_post(post)
      {:error, %Ecto.Changeset{}}

  """
  def delete_post(%Post{} = post) do
    Repo.delete(post)
  end

  def delete_snap(%Snap{} = snap) do
    Repo.delete(snap)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking post changes.

  ## Examples

      iex> change_post(post)
      %Ecto.Changeset{source: %Post{}}

  """
  def change_post(%Post{} = post) do
    Post.changeset(post, %{})
  end

  def change_snap(%Snap{} = snap) do
    Snap.changeset(snap, %{})
  end

  @doc """
  Gets a single tag and all of its pics.

  Raises `Ecto.NoResultsError` if the Tag does not exist.

  ## Examples

      iex> get_tag_by_slug!(foobar)
      %Tag{ pics: [...] }

      iex> get_comment!(badtag)
      ** (Ecto.NoResultsError)

  """
  def get_post_for_tag!(tag_name, params \\ %{}) do
    total_count =
      from(t in "tags",
        join: pt in "post_tags",
        on: pt.tag_id == t.id,
        where: t.name == ^tag_name,
        select: count()
      )
      |> Repo.one()

    {posts_query, k} =
      from(p in Post, order_by: [desc: :inserted_at], preload: [:tags])
      |> Dissolver.paginate(params, total_count: total_count, lazy: true)

    tag =
      from(t in Tag, where: t.name == ^tag_name, preload: [posts: ^posts_query])
      |> Repo.one!()

    {tag, k}
  end

  def get_snap_for_tag!(tag_name, params \\ %{}) do
    total_count =
      from(t in "tags",
        join: st in "snap_tags",
        on: st.tag_id == t.id,
        where: t.name == ^tag_name,
        select: count()
      )
      |> Repo.one()

    {snaps_query, k} =
      from(s in Snap, order_by: [desc: :inserted_at], preload: [:tags])
      |> Dissolver.paginate(params, total_count: total_count, lazy: true)

    tag =
      from(t in Tag, where: t.name == ^tag_name, preload: [snaps: ^snaps_query])
      |> Repo.one!()

    {tag, k}
  end
end
