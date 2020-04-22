defmodule MorphicPro.AccountsFixtures do
  import Ecto.Changeset

  def unique_user_email, do: "user#{System.unique_integer()}@example.com"
  def valid_user_password, do: "hello world!"

  def unconfirmed_user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        email: unique_user_email(),
        password: valid_user_password()
      })
      |> MorphicPro.Accounts.register_user()

    user
  end

  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        email: unique_user_email(),
        password: valid_user_password()
      })
      |> MorphicPro.Accounts.register_user()

    {:ok, user} =
      user
      |> cast(%{confirmed_at: NaiveDateTime.utc_now() |> NaiveDateTime.truncate(:second)}, [
        :confirmed_at
      ])
      |> MorphicPro.Repo.update()

    user
  end

  def admin_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        email: unique_user_email(),
        password: valid_user_password()
      })
      |> MorphicPro.Accounts.register_user()

    {:ok, user} =
      user
      |> cast(
        %{admin: true, confirmed_at: NaiveDateTime.utc_now() |> NaiveDateTime.truncate(:second)},
        [:admin, :confirmed_at]
      )
      |> MorphicPro.Repo.update()

    user
  end

  def extract_user_token(fun) do
    captured = fun.(&"[TOKEN]#{&1}[TOKEN]")
    [_, token, _] = String.split(captured.html_body, "[TOKEN]")
    token
  end
end
