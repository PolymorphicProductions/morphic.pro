defmodule MorphicPro.Blog.Post do
  @moduledoc false

  use Ecto.Schema
  import Ecto.Changeset

  alias MorphicPro.Blog.{Tag, Tagging}

  @behaviour Bodyguard.Schema

  def scope(query, %MorphicPro.Accounts.User{admin: true}, _)  do
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
    field :tag_list, {:array, :string}, virtual: true
    field :large_img, :string
    field :thumb_img, :string

    field :likes_count, :integer, default: 0

    many_to_many(:tags, Tag,
      join_through: "post_tags",
      on_delete: :delete_all,
      on_replace: :delete
    )

    field :tags_string, :string

    timestamps()
  end

  @required_attrs [
    :body,
    :excerpt,
    :published_at_local,
    :title,
    :draft,
    :tags_string,
    :large_img,
    :thumb_img
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
    |> validate_published_at()
    |> put_published_at()
    |> put_slug()
    |> parse_tags_list()
    |> parse_tags_assoc()
    |> unsafe_validate_unique(:slug, MorphicPro.Repo)
    |> unique_constraint(:slug)
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

  defp parse_tags_list(%{valid?: true, changes: %{tags_string: tags_string}} = changeset) do
    tag_list = tags_string |> String.split(", ") |> Enum.map(fn tag -> tag |> Slug.slugify() end)
    slugified_tags_string = tag_list |> Enum.join(", ")

    changeset
    |> put_change(:tags_string, slugified_tags_string)
    |> put_change(:tag_list, tag_list)
  end

  defp parse_tags_list(changeset), do: changeset

  defp parse_tags_assoc(
         %Ecto.Changeset{valid?: true, changes: %{tag_list: _tags_list}} = changeset
       ) do
    changeset
    |> Tagging.changeset(MorphicPro.Blog.Tag, :tags, :tag_list)
  end

  defp parse_tags_assoc(changeset), do: changeset
end
