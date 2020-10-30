defmodule MorphicProWeb.LiveCase do
  @moduledoc """
  This module defines the test case to be used by
  tests that require setting up a connection.

  Such tests rely on `Phoenix.LiveTest` and also
  import other functionality to make it easier
  to build common data structures and query the data layer.

  Finally, if the test case interacts with the database,
  we enable the SQL sandbox, so changes done to the database
  are reverted at the end of every test. If you are using
  PostgreSQL, you can even run database tests asynchronously
  by setting `use MorphicProWeb.ConnCase, async: true`, although
  this option is not recommended for other databases.
  """

  use ExUnit.CaseTemplate

  alias Ecto.Adapters.SQL.Sandbox
  alias MorphicPro.Repo

  using do
    quote do
      # Import conveniences for testing with connections

      import Plug.Conn
      import Phoenix.ConnTest
      import Phoenix.LiveViewTest

      import MorphicProWeb.LiveCase
      # The default endpoint for testing
      @endpoint MorphicProWeb.Endpoint

    end
  end

  setup tags do
    :ok = Sandbox.checkout(Repo)

    unless tags[:async] do
      Sandbox.mode(Repo, {:shared, self()})
    end

    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end

  @doc """
  Setup helper that registers and logs in users.

      setup :register_and_login_user

  It stores an updated connection and a registered user in the
  test context.
  """
  def register_and_login_user(%{conn: conn}) do
    user = MorphicPro.AccountsFixtures.user_fixture()
    %{conn: login_user(conn, user), user: user}
  end

  def register_and_login_admin(%{conn: conn}) do
    user = MorphicPro.AccountsFixtures.admin_fixture()
    %{conn: login_user(conn, user), user: user}
  end

  @doc """
  Logs the given `user` into the `conn`.

  It returns an updated `conn`.
  """
  def login_user(conn, user) do
    token = MorphicPro.Accounts.generate_session_token(user)

    conn
    |> Phoenix.ConnTest.init_test_session(%{})
    |> Plug.Conn.put_session(:user_token, token)
  end
end
