defmodule MorphicPro.Repo.Migrations.CreateUsersAuthTables do
  use Ecto.Migration

  def change do
    execute "CREATE EXTENSION IF NOT EXISTS citext", ""

    MorphicPro.Accounts.User |> MorphicPro.Repo.delete_all()

    alter table(:users) do
      modify :email, :citext, null: false
      add :hashed_password, :string, null: false
      add :confirmed_at, :naive_datetime
      remove :email_confirmation_token
      remove :email_confirmed_at
      remove :unconfirmed_email
      remove :password_hash
    end

    create table(:users_tokens) do
      add :user_id, references(:users, on_delete: :delete_all), null: false
      add :token, :binary, null: false
      add :context, :string, null: false
      add :sent_to, :string
      timestamps(updated_at: false)
    end

    create unique_index(:users_tokens, [:context, :token])
  end
end
