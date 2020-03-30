defmodule MorphicPro.Repo do
  use Ecto.Repo,
    otp_app: :morphic_pro,
    adapter: Ecto.Adapters.Postgres

  import Ecto.Query

  def by_slug(query, slug) do
    from(
      q in query,
      where: q.slug == ^slug
    )
  end
end
