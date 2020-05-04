# defmodule MorphicProWeb.PostControllerTest do
#   use MorphicProWeb.ConnCase

#   import MorphicPro.Factory

#   describe "index" do
#     test "lists some posts while not logged in ", %{conn: conn} do
#       insert(:post, title: "See me")

#       insert(:post,
#         title: "Dont see me",
#         draft: true,
#         published_at: Timex.today() |> Timex.shift(days: 1)
#       )

#       conn = get(conn, Routes.post_path(conn, :index))
#       assert html_response(conn, 200) =~ "See me"
#       refute html_response(conn, 200) =~ "Dont see me"
#     end

#     test "lists some posts as non admin ", %{conn: conn} do
#       insert(:post, title: "See me")

#       insert(:post,
#         title: "Dont see me",
#         draft: true,
#         published_at: Timex.today() |> Timex.shift(days: 1)
#       )

#       conn = get(conn, Routes.post_path(conn, :index))
#       assert html_response(conn, 200) =~ "See me"
#       refute html_response(conn, 200) =~ "Dont see me"
#     end

#     test "lists all posts as admin", %{conn: conn} do
#       %{conn: conn} = register_and_login_admin(%{conn: conn})
#       insert(:post, title: "See me")

#       insert(:post,
#         title: "Me too",
#         draft: true,
#         published_at: Timex.today() |> Timex.shift(days: 1)
#       )

#       conn = get(conn, Routes.post_path(conn, :index))
#       assert html_response(conn, 200) =~ "See me"
#       assert html_response(conn, 200) =~ "Me too"
#     end
#   end

#   describe "new post" do
#     setup [:register_and_login_admin]

#     test "renders form", %{conn: conn} do
#       conn = get(conn, Routes.post_path(conn, :new))
#       assert html_response(conn, 200) =~ "New Post"
#     end
#   end

#   describe "create post" do
#     setup [:register_and_login_admin]

#     test "redirects to show when data is valid", %{conn: conn} do
#       %{title: title} = post_params = params_for(:post)
#       conn = post(conn, Routes.post_path(conn, :create), post: post_params)

#       assert %{slug: slug} = redirected_params(conn)
#       assert redirected_to(conn) == Routes.post_path(conn, :show, slug)

#       conn = get(conn, Routes.post_path(conn, :show, slug))
#       assert html_response(conn, 200) =~ title
#     end

#     test "renders errors when data is invalid", %{conn: conn} do
#       conn = post(conn, Routes.post_path(conn, :create), post: %{})
#       assert html_response(conn, 200) =~ "New Post"
#     end
#   end

#   describe "edit post" do
#     setup [:create_post, :register_and_login_admin]

#     test "renders form for editing chosen post", %{conn: conn, post: post} do
#       conn = get(conn, Routes.post_path(conn, :edit, post))
#       assert html_response(conn, 200) =~ "Edit Post"
#     end
#   end

#   describe "update post" do
#     setup [:create_post, :register_and_login_admin]

#     test "redirects when data is valid", %{conn: conn, post: post} do
#       %{title: title} = update_post_params = params_for(:post)
#       conn = put(conn, Routes.post_path(conn, :update, post), post: update_post_params)
#       assert %{slug: slug} = redirected_params(conn)
#       assert redirected_to(conn) == Routes.post_path(conn, :show, slug)

#       conn = get(conn, Routes.post_path(conn, :show, slug))
#       assert html_response(conn, 200) =~ title
#     end

#     test "renders errors when data is invalid", %{conn: conn, post: post} do
#       conn = put(conn, Routes.post_path(conn, :update, post), post: %{title: nil})
#       assert html_response(conn, 200) =~ "Edit Post"
#     end
#   end

#   describe "delete post" do
#     setup [:create_post, :register_and_login_admin]

#     test "deletes chosen post", %{conn: conn, post: post} do
#       conn = delete(conn, Routes.post_path(conn, :delete, post))
#       assert redirected_to(conn) == Routes.post_path(conn, :index)

#       assert_error_sent 404, fn ->
#         get(conn, Routes.post_path(conn, :show, post))
#       end
#     end
#   end

#   defp create_post(_), do: {:ok, post: insert(:post)}
# end
