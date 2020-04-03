defmodule MorphicProWeb.PageController do
  use MorphicProWeb, :controller

  def index(conn, _params) do
    posts = MorphicPro.Blog.list_latest_posts
    render(conn, "index.html", posts: posts)
  end
end
