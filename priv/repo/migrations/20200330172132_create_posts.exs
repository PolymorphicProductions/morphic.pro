defmodule MorphicPro.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :body, :text, null: false
      add :excerpt, :text, null: false
      add :published_at, :date
      add :published_at_local, :string
      add :slug, :string, null: false
      add :title, :string, null: false
      add :draft, :boolean, default: false, null: false
      timestamps()
    end

    create(unique_index(:posts, [:slug]))
  end
end
