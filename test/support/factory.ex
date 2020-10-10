defmodule MorphicPro.Factory do
  @moduledoc false

  use ExMachina.Ecto, repo: MorphicPro.Repo

  alias Faker.{Commerce, Lorem, Name}
  alias MorphicPro.Blog.{Post, Snap, Tag}

  # Only use as a source for params
  # Will not produce a valid struct
  def random_post_factory do
    title = Name.Person.title()

    tags =
      build_list(3, :tag)
      |> Enum.map(fn tag -> tag.name end)
      |> Enum.join(", ")

    date =
      Faker.Date.between(
        Timex.shift(Timex.today(), years: -1),
        Timex.shift(Timex.today(), years: 1)
      )

    %Post{
      title: title,
      slug: Slug.slugify(title),
      body: Lorem.paragraph(),
      excerpt: Lorem.paragraph(),
      draft: Enum.random([true, false]),
      tags_string: tags,
      published_at_local: Timex.format!(date, "%m/%d/%Y", :strftime),
      large_img: "large_img.jpg",
      thumb_img: "thumb_img.jpg"
    }
  end

  def random_snap_factory do
    tags = build_list(3, :tag)

    tags_string =
      tags
      |> Enum.map(fn t -> "##{t.name}" end)
      |> Enum.uniq()
      |> Enum.join(", ")

    date =
      Faker.Date.between(
        Timex.shift(Timex.today(), years: -1),
        Timex.shift(Timex.today(), years: 1)
      )

    %Snap{
      body: tags_string <> Lorem.paragraph(),
      draft: Enum.random([true, false]),
      tags: tags,
      published_at_local: Timex.format!(date, "%m/%d/%Y", :strftime),
      large_img: "large_img.jpg",
      thumb_img: "thumb_img.jpg"
    }
  end

  def post_factory do
    title = Name.title()
    date = Timex.today()
    tags = build_list(3, :tag)

    tags_string =
      tags
      |> Enum.map(fn t -> t.name end)
      |> Enum.uniq()
      |> Enum.join(", ")

    %Post{
      title: title,
      slug: Slug.slugify(title),
      body: Lorem.paragraph(),
      excerpt: Lorem.paragraph(),
      draft: false,
      tags_string: tags_string,
      published_at: date,
      published_at_local: Timex.format!(date, "%m/%d/%Y", :strftime),
      tags: tags,
      large_img: "large_img.jpg",
      thumb_img: "thumb_img.jpg"
    }
  end

  def snap_factory do
    date = Timex.today()
    tags = build_list(3, :tag)

    tags_string =
      tags
      |> Enum.map(fn t -> "##{t.name}" end)
      |> Enum.uniq()
      |> Enum.join(", ")

    %Snap{
      body: tags_string <> Lorem.paragraph(),
      draft: false,
      published_at: date,
      tags: tags,
      published_at_local: Timex.format!(date, "%m/%d/%Y", :strftime),
      large_img: "large_img.jpg",
      thumb_img: "thumb_img.jpg"
    }
  end

  def tag_factory do
    %Tag{
      name: sequence(:name, &"#{Commerce.En.product_name_product() |> Slug.slugify()}#{&1}")
    }
  end
end
