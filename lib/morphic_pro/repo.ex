defmodule MorphicPro.Repo do
  use Ecto.Repo,
    otp_app: :morphic_pro,
    adapter: Ecto.Adapters.Postgres

  import Ecto.Query

  def approved(query) do
    from(q in query, where: q.approved == true)
  end

  def order_by_oldest(query) do
    from(q in query, order_by: [asc: q.inserted_at])
  end

  def by_slug(query, slug) do
    from(
      q in query,
      where: q.slug == ^slug
    )
  end

  def by_uuid(query, uuid) do
    from(
      q in query,
      where: q.id == ^uuid
    )
  end

  def where_published(query) do
    from(
      q in query,
      where: q.published_at <= ^Timex.today(),
      where: q.draft == false
    )
  end

  def order_by_published_at(query) do
    from(
      q in query,
      order_by: [desc: :published_at]
    )
  end
end
