defmodule MorphicProWeb.Plugs.NavbarSmallTest do
  use MorphicProWeb.ConnCase

  test "assigns navbar-small to nav_class", %{conn: conn} do
    conn =
      conn |> MorphicProWeb.Plugs.NavbarSmall.call(%{})
      assert conn.assigns[:nav_class] == "navbar-small"
  end
end
