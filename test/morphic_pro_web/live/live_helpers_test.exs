defmodule MorphicProWeb.LiveHelpersTest do
  use MorphicPro.DataCase

  import MorphicPro.Factory

  describe "parse_markdown/1" do
    test "successfully parse markdown" do
      assert MorphicProWeb.LiveHelpers.parse_markdown("# Hello") == "<h1>\nHello</h1>\n"
    end
    test "fails to parse marksdown" do
      error = MorphicProWeb.LiveHelpers.parse_markdown("\n{:foo}\n{:bar}")
      assert error == "warning on line 2 | Illegal attributes [\"foo\"] ignored in IAL\nwarning on line 3 | Illegal attributes [\"bar\"] ignored in IAL\n"
    end
  end
  describe "parse_post_tags" do
    test "successfully parse post tags" do
      assert [%{name: "foo"}, %{name: "bar"}]
      |> MorphicProWeb.LiveHelpers.parse_post_tags()
      |> Enum.map(fn x -> Phoenix.HTML.safe_to_string(x) end ) == ["<span>\n  <a class=\"inline-block py-2 px-2 text-sm font-semibold text-gray-700 bg-gray-200\" data-phx-link=\"redirect\" data-phx-link-state=\"push\" href=\"/posts/tags/foo\">#foo</a>\n</span>\n",
      "<span>\n  <a class=\"inline-block py-2 px-2 text-sm font-semibold text-gray-700 bg-gray-200\" data-phx-link=\"redirect\" data-phx-link-state=\"push\" href=\"/posts/tags/bar\">#bar</a>\n</span>\n"]
    end
  end
  describe "parse_tags/1" do
    test "successfully parse tags" do
      assert "#Foo #bar"
      |> MorphicProWeb.LiveHelpers.parse_tags() == "<a href='/snaps/tags/Foo'>#Foo</a> <a href='/snaps/tags/bar'>#bar</a>"
    end
  end
  describe "parse_date/1" do
    test "successfully parses a date" do
      assert ~D[2020-10-25]
      |> MorphicProWeb.LiveHelpers.parse_date() == "Oct 25, 2020"
    end
  end
  describe "admin_links/3" do
    test "generates admin links for a snap" do
      snap = insert(:snap)
      assert MorphicProWeb.LiveHelpers.admin_links(%{admin: true}, snap, %Plug.Conn{})
      |> Phoenix.HTML.safe_to_string() == "  <a class=\"btn-orange focus:outline-none mr-2\" data-phx-link=\"redirect\" data-phx-link-state=\"push\" href=\"/snaps/#{snap.id}/edit\">\n    <i class=\"fas fa-edit\"></i> Edit\n  </a>\n\n  <a class=\"btn-red focus:outline-none\" data-confirm=\"Delete Snap 🗑?\" href=\"#\" phx-click=\"delete\" phx-value-id=\"#{snap.id}\">\n    <i class=\"fas fa-trash\"></i> Delete\n  </a>\n"
    end
    test "generates admin links for a post" do
      post = insert(:post)
      assert MorphicProWeb.LiveHelpers.admin_links(%{admin: true}, post, %Plug.Conn{})
      |> Phoenix.HTML.safe_to_string() == "  <a class=\"btn-orange focus:outline-none mr-2\" data-phx-link=\"redirect\" data-phx-link-state=\"push\" href=\"/posts/#{post.slug}/edit\">\n    <i class=\"fas fa-edit\"></i> Edit\n  </a>\n\n  <a class=\"btn-red focus:outline-none\" data-confirm=\"Delete Post 🗑: #{post.title} ?\" href=\"#\" phx-click=\"delete\" phx-value-id=\"#{post.slug}\">\n    <i class=\"fas fa-trash\"></i> Delete\n  </a>\n"
    end
    test "not admin" do
      assert MorphicProWeb.LiveHelpers.admin_links(%{admin: false}, :bar, "baz") == nil
      assert MorphicProWeb.LiveHelpers.admin_links(:foo, :bar, "baz") == nil
    end
  end
end
