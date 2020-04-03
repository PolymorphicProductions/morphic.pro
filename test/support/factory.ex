defmodule MorphicPro.Factory do
  use ExMachina.Ecto, repo: MorphicPro.Repo

  alias MorphicPro.Blog.{Post, Tag}

  # Only use as a source for params
  # Will not produce a valid struct
  @spec random_post_factory :: MorphicPro.Blog.Post.t()
  def random_post_factory do
    title = Faker.Name.title()
    tags = build_list(3, :tag)
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
      body: Faker.Lorem.paragraph(),
      excerpt: Faker.Lorem.paragraph(),
      draft: Enum.random([true, false]),
      tags_string: tags,
      published_at_local: Timex.format!(date, "%m/%d/%Y", :strftime)
    }
  end

  def post_factory() do
    title = Faker.Name.title()
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
      body: Faker.Lorem.paragraph(),
      excerpt: Faker.Lorem.paragraph(),
      draft: false,
      tags_string: tags_string,
      published_at: date,
      published_at_local: Timex.format!(date, "%m/%d/%Y", :strftime),
      tags: tags
    }
  end

  def tag_factory() do
    %Tag{
      name: sequence(:name, &"#{Faker.Commerce.En.product_name_product()}#{&1})")
    }
  end
end
