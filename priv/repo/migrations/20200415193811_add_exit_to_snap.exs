defmodule MorphicPro.Repo.Migrations.AddExitToSnap do
  use Ecto.Migration

  def change do
    alter table("snaps") do
      add :exif, :map
    end
  end
end
