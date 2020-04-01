defmodule MorphicPro.Blog.Post do
  use Ecto.Schema
  import Ecto.Changeset

  @behaviour Bodyguard.Schema

  def scope(query, %MorphicPro.Users.User{admin: true}, _) do
    query
  end

  def scope(query, _, _) do
    query
    |> MorphicPro.Repo.where_published()
  end

  @derive {Phoenix.Param, key: :slug}

  schema "posts" do
    field :body, :string
    field :draft, :boolean, default: true
    field :excerpt, :string
    field :published_at, :date
    field :published_at_local, :string
    field :slug, :string
    field :title, :string

    timestamps()
  end

  @required_attrs [
    :body,
    :excerpt,
    :published_at_local,
    :title,
    :draft
  ]

  @spec changeset(
          {map, map} | %{:__struct__ => atom | %{__changeset__: map}, optional(atom) => any},
          :invalid | %{optional(:__struct__) => none, optional(atom | binary) => any}
        ) :: Ecto.Changeset.t()
  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, @required_attrs)
    |> validate_required(@required_attrs)
    |> validate_format(
      :published_at_local,
      ~r/^\d{1,2}\/\d{1,2}\/\d{4}$/
    )
    |> IO.inspect()
    |> validate_published_at()
    |> put_published_at()
    |> put_slug()
  end

  defp validate_published_at(
         %Ecto.Changeset{
           valid?: true,
           changes: %{published_at_local: published_at_local}
         } = cs
       ) do
    case Timex.parse(published_at_local, "%m/%d/%Y", :strftime) do
      {:ok, _} ->
        cs

      {:error, _} ->
        cs
        |> add_error(:published_at_local, "not a valid date")
    end
  end

  defp validate_published_at(cs), do: cs

  defp put_published_at(
         %Ecto.Changeset{
           valid?: true,
           changes: %{published_at_local: published_at_local}
         } = cs
       ) do
    published_at =
      published_at_local
      |> Timex.parse!("%m/%d/%Y", :strftime)
      |> Timex.to_date()

    cs
    |> put_change(:published_at, published_at)
  end

  defp put_published_at(cs), do: cs

  defp put_slug(
         %Ecto.Changeset{
           valid?: true,
           changes: %{title: title}
         } = cs
       ) do
    cs
    |> put_change(:slug, title |> Slug.slugify())
  end

  defp put_slug(cs), do: cs
end
