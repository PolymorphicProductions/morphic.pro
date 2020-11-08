
defmodule MorphicProWeb.PostLiveTest do
  use MorphicProWeb.LiveCase
  import MorphicPro.Factory

  test "index connected mount", %{conn: conn} do
    post = insert(:post, published_at: Timex.today(), tags: [])
    {:ok, _view, html} = live(conn, "/posts")
    assert html =~ "The lines in between"
    assert html =~ post.title
  end

  test "show connected mount", %{conn: conn} do
    post = insert(:post, published_at: Timex.today(), tags: [])
    {:ok, _view, html} = live(conn, "/posts/#{post.slug}")
    assert html =~ post.title
  end

end
