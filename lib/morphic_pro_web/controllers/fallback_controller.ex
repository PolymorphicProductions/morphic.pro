defmodule MorphicProWeb.FallbackController do
  use MorphicProWeb, :controller

  def call(conn, {:error, :unauthorized}) do
    conn
    |> put_status(:forbidden)
    |> put_view(MorphicProWeb.ErrorView)
    |> render(:"403")
  end
end
