
defmodule MorphicProWeb.PageLiveTest do
  use MorphicProWeb.LiveCase
  import MorphicPro.Factory

  test "index connected mount", %{conn: conn} do
    post = insert(:post, published_at: Timex.today(), tags: [])
    snap = insert(:snap, published_at: Timex.today(), tags: [])

    {:ok, view, html} = live(conn, "/")
    assert html =~ "Your personal creative<br/>digital metamorphosis"
    assert render_click(view, :inc_post_likes, %{"post-id" => post.id}) =~ "phx-value-post-id=\"#{post.id}\"><i class=\"fas fa-heart\"></i> 0"
    assert render_click(view, :inc_post_likes, %{"post-id" => post.id}) =~ "phx-value-post-id=\"#{post.id}\"><i class=\"fas fa-heart\"></i> 1"
    assert render_click(view, :inc_post_likes, %{"post-id" => post.id}) =~ "phx-value-post-id=\"#{post.id}\"><i class=\"fas fa-heart\"></i> 2"

    assert render_click(view, :inc_snap_likes, %{"snap-id" => snap.id}) =~ "phx-value-snap-id=\"#{snap.id}\"><i class=\"fas fa-heart\"></i> 0"
    assert render_click(view, :inc_snap_likes, %{"snap-id" => snap.id}) =~ "phx-value-snap-id=\"#{snap.id}\"><i class=\"fas fa-heart\"></i> 1"
    assert render_click(view, :inc_snap_likes, %{"snap-id" => snap.id}) =~ "phx-value-snap-id=\"#{snap.id}\"><i class=\"fas fa-heart\"></i> 2"
  end

  test "about connected mount", %{conn: conn} do
    {:ok, _view, html} = live(conn, "/about")
    assert html =~ "Please, pardon the narcissism."
  end
  test "privacy connected mount", %{conn: conn} do
    {:ok, _view, html} = live(conn, "/privacy")
    assert html =~ "Privacy Policy of Morphic Pro LLC"
  end
  test "terms connected mount", %{conn: conn} do
    {:ok, _view, html} = live(conn, "/terms")
    assert html =~ "This website is operated by Morphic Pro."
  end
end
