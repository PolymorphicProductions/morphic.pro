defmodule MorphicProWeb.FallbackControllerTest do
  use MorphicProWeb.ConnCase

  test "unauthorized 403", %{conn: conn} do
    conn = conn 
          |> fetch_query_params()
          |> Phoenix.Controller.accepts(["html", "json"])
          |> MorphicProWeb.FallbackController.call({:error, :unauthorized}) 
          
    assert html_response(conn, 403) =~ "Forbidden"
  end
end
