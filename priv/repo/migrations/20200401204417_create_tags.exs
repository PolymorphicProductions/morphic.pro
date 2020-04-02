defmodule MorphicPro.Repo.Migrations.CreateTags do
  use Ecto.Migration

  def change do

    create table(:tags) do
      add(:name, :text, null: false)
    end

    create(index(:tags, ["lower(name)"], unique: true))

    create table(:post_tags) do
      add(:tag_id, references(:tags))
      add(:post_id, references(:posts, on_delete: :nothing))
    end

    create(index(:post_tags, [:tag_id, :post_id], unique: true))

    alter table(:posts) do
      add(:tags_string, :string)
    end
  end
end
