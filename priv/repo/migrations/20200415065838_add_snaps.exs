defmodule MorphicPro.Repo.Migrations.AddSnaps do
  use Ecto.Migration

  def change do
    create table(:snaps, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :body, :text
      add :large_img, :string
      add :thumb_img, :string
      add :published_at, :date
      add :published_at_local, :string
      add :draft, :boolean, default: false, null: false
      timestamps()
    end

    create table(:snap_tags) do
      add(:tag_id, references(:tags))
      add(:snap_id, references(:snaps, on_delete: :nothing, type: :uuid))
    end

    create(index(:snap_tags, [:tag_id, :snap_id], unique: true))
  end
end
