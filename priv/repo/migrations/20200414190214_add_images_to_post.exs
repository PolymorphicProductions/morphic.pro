defmodule MorphicPro.Repo.Migrations.AddImagesToPost do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add(:large_img, :string)
      add(:thumb_img, :string)
    end
  end
end
