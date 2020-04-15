defmodule MorphicPro.Blog.Tag do
  @moduledoc false

  use Ecto.Schema

  schema "tags" do
    field(:name)
    many_to_many(:posts, MorphicPro.Blog.Post, join_through: "post_tags")
    many_to_many(:snaps, MorphicPro.Blog.Snap, join_through: "snap_tags")
  end
end
