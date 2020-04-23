defmodule MorphicPro.FallbackController do
  use MorphicProWeb, :controller

  def call(conn, {:error, :unauthorized}) do
    conn
    |> put_status(:forbidden)
    |> render(MorphicProWeb.ErrorView, :"403")
  end
end
