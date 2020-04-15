defmodule MorphicPro.Blog.Snap do
  use Ecto.Schema
  import Ecto.Changeset
  alias MorphicPro.Blog.{Tag, Tagging}

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  @behaviour Bodyguard.Schema

  def(scope(query, %MorphicPro.Users.User{admin: true}, _)) do
    query
  end

  def scope(query, _, _) do
    query
    |> MorphicPro.Repo.where_published()
  end

  schema "snaps" do
    field :body, :string
    field :draft, :boolean, default: true
    field :published_at, :date
    field :published_at_local, :string
    field :tag_list, {:array, :string}, virtual: true
    field :large_img, :string
    field :thumb_img, :string

    many_to_many(:tags, Tag,
      join_through: "snap_tags",
      on_delete: :delete_all,
      on_replace: :delete
    )

    timestamps()
  end

  def changeset(snap, attrs) do
    snap
    |> cast(attrs, [:body, :published_at_local, :large_img, :thumb_img, :draft])
    |> validate_required([:body, :published_at_local, :large_img, :thumb_img])
    |> validate_published_at()
    |> put_published_at()
    |> put_tags_list()
    |> parse_tags_assoc()
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

  defp put_tags_list(%{valid?: true, changes: %{body: body}} = changeset) do
    tag_list = Regex.scan(~r/#(\w*)/, body) |> Enum.map(fn [_, tag] -> tag end)

    changeset
    |> put_change(:tag_list, tag_list)
  end

  defp put_tags_list(changeset), do: changeset

  defp parse_tags_assoc(
         %Ecto.Changeset{valid?: true, changes: %{tag_list: _tags_list}} = changeset
       ) do
    changeset
    |> Tagging.changeset(MorphicPro.Blog.Tag, :tags, :tag_list)
  end

  defp parse_tags_assoc(changeset), do: changeset
end
