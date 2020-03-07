defmodule MorphicProWeb.PageController do
  use MorphicProWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
