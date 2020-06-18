defmodule MorphicProWeb.Plug.AdminsOnlyTest do
  use MorphicProWeb.ConnCase
  import MorphicPro.AccountsFixtures

  test "GET /dashboard as user", %{conn: conn} do
    conn = conn |> login_user(user_fixture()) |> get("/dashboard")
    assert html_response(conn, 403) =~ "Unauthorized 403"
  end

  test "GET /dashboard as admin", %{conn: conn} do
    conn = conn |> login_user(admin_fixture()) |> get("/dashboard/nonode%40nohost/home")
    assert html_response(conn, 200) =~ "Phoenix LiveDashboard"
  end
end
