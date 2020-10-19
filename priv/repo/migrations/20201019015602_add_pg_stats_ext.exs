defmodule MorphicPro.Repo.Migrations.AddPgStatsExt do
  use Ecto.Migration

  def change do
    execute "CREATE EXTENSION IF NOT EXISTS pg_stat_statements", ""
  end
end
