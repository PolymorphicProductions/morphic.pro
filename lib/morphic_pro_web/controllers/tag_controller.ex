defmodule MorphicProWeb.TagController do
  use MorphicProWeb, :controller
  alias MorphicPro.Blog

  def show_post(conn, %{"tag" => tag} = params) do
    {tag, dissolver} = Blog.get_post_for_tag!(tag, params)
    render(conn, "show_posts.html", tag: tag, dissolver: dissolver)
  end
end
