defmodule MorphicPro.Blog.Tag do
  use Ecto.Schema

  schema "tags" do
    field(:name)
    # many_to_many(:pics, MorphicPro.Blog.Pic, join_through: "pic_tags")
    many_to_many(:posts, MorphicPro.Blog.Post, join_through: "post_tags")
  end
end
