defmodule MorphicProWeb.PageController do
  use MorphicProWeb, :controller

  def index(conn, _params) do
    posts = MorphicPro.Blog.list_latest_posts()
    snaps = MorphicPro.Blog.list_latest_snaps()
    render(conn, "index.html", posts: posts, snaps: snaps)
  end
end
