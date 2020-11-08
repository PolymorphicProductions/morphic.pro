
defmodule MorphicProWeb.SnapLiveTest do
  use MorphicProWeb.LiveCase
  import MorphicPro.Factory

  test "index connected mount", %{conn: conn} do
    snap = insert(:snap, published_at: Timex.today(), tags: [])
    {:ok, _view, html} = live(conn, "/snaps")
    assert html =~ "In a blink of an eye"
    assert html =~ snap.id
  end

  test "show connected mount", %{conn: conn} do
    snap = insert(:snap, published_at: Timex.today(), tags: [])
    {:ok, _view, html} = live(conn, "/snaps/#{snap.id}")
    assert html =~ snap.id
  end

end
