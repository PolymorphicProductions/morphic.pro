defmodule MorphicPro.Repo.Migrations.AddLikes do
  use Ecto.Migration

  def change do
    alter table("posts") do
      add :likes_count, :integer, default: 0
    end

    alter table("snaps") do
      add :likes_count, :integer, default: 0
    end
  end
end
