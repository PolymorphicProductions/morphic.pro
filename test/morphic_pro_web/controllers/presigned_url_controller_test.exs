defmodule MorphicProWeb.PresignedUrlControllerTest do
  use MorphicProWeb.ConnCase
  import MorphicPro.AccountsFixtures

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "PUT /", %{conn: conn} do
    conn = conn |> put(Routes.presigned_url_path(conn, :gen_presigned_url), %{"file" => "foo"})
    assert html_response(conn, 403) =~ "Unauthorized 403"
  end

  test "PUT / as user", %{conn: conn} do
    conn =
      conn
      |> login_user(user_fixture())
      |> put(Routes.presigned_url_path(conn, :gen_presigned_url), %{"file" => "foo"})

    assert html_response(conn, 403) =~ "Unauthorized 403"
  end

  test "PUT /dashboard as admin", %{conn: conn} do
    conn =
      conn
      |> login_user(admin_fixture())
      |> put(Routes.presigned_url_path(conn, :gen_presigned_url), %{"file" => "foobar.txt"})

    %{"data" => %{"url" => url}} = json_response(conn, 200)
    assert url =~ "foobar.txt"
  end
end
