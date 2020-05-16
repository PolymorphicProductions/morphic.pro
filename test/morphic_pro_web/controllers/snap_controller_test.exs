# defmodule MorphicProWeb.SnapControllerTest do
#   use MorphicProWeb.ConnCase

#   import MorphicPro.Factory

#   describe "index" do
#     test "lists some snap while not logged in ", %{conn: conn} do
#       insert(:snap, body: "See me")

#       insert(:snap,
#         body: "Dont see me",
#         draft: true,
#         published_at: Timex.today() |> Timex.shift(days: 1)
#       )

#       conn = get(conn, Routes.snap_path(conn, :index))
#       assert html_response(conn, 200) =~ "See me"
#       refute html_response(conn, 200) =~ "Dont see me"
#     end

#     test "lists some snaps as non admin ", %{conn: conn} do
#       insert(:snap, body: "See me")

#       insert(:snap,
#         body: "Dont see me",
#         draft: true,
#         published_at: Timex.today() |> Timex.shift(days: 1)
#       )

#       conn = get(conn, Routes.snap_path(conn, :index))
#       assert html_response(conn, 200) =~ "See me"
#       refute html_response(conn, 200) =~ "Dont see me"
#     end

#     test "lists all snaps as admin", %{conn: conn} do
#       %{conn: conn} = register_and_login_admin(%{conn: conn})
#       insert(:snap, body: "See me")

#       insert(:snap,
#         body: "Me too",
#         draft: true,
#         published_at: Timex.today() |> Timex.shift(days: 1)
#       )

#       conn = get(conn, Routes.snap_path(conn, :index))
#       assert html_response(conn, 200) =~ "See me"
#       assert html_response(conn, 200) =~ "Me too"
#     end
#   end

#   describe "new snap" do
#     setup [:register_and_login_admin]

#     test "renders form", %{conn: conn} do
#       conn = get(conn, Routes.snap_path(conn, :new))
#       assert html_response(conn, 200) =~ "New Snap"
#     end
#   end

#   describe "create snap" do
#     setup [:register_and_login_admin]

#     test "redirects to show when data is valid", %{conn: conn} do
#       %{body: body} = snap_params = params_for(:snap, body: "this is just a body")
#       conn = post(conn, Routes.snap_path(conn, :create), snap: snap_params)

#       assert %{id: id} = redirected_params(conn)
#       assert redirected_to(conn) == Routes.snap_path(conn, :show, id)

#       conn = get(conn, Routes.snap_path(conn, :show, id))
#       assert html_response(conn, 200) =~ body
#     end

#     test "renders errors when data is invalid", %{conn: conn} do
#       conn = post(conn, Routes.snap_path(conn, :create), snap: %{})
#       assert html_response(conn, 200) =~ "New Snap"
#     end
#   end

#   describe "edit snap" do
#     setup [:create_snap, :register_and_login_admin]

#     test "renders form for editing chosen snap", %{conn: conn, snap: snap} do
#       conn = get(conn, Routes.snap_path(conn, :edit, snap))
#       assert html_response(conn, 200) =~ "Edit Snap"
#     end
#   end

#   describe "update snap" do
#     setup [:create_snap, :register_and_login_admin]

#     test "redirects when data is valid", %{conn: conn, snap: snap} do
#       %{body: body} = update_snap_params = params_for(:snap, body: "just some stuff")
#       conn = put(conn, Routes.snap_path(conn, :update, snap), snap: update_snap_params)
#       assert %{id: id} = redirected_params(conn)
#       assert redirected_to(conn) == Routes.snap_path(conn, :show, id)

#       conn = get(conn, Routes.snap_path(conn, :show, id))
#       assert html_response(conn, 200) =~ body
#     end

#     test "renders errors when data is invalid", %{conn: conn, snap: snap} do
#       conn = put(conn, Routes.snap_path(conn, :update, snap), snap: %{body: nil})
#       assert html_response(conn, 200) =~ "Edit Snap"
#     end
#   end

#   describe "delete snap" do
#     setup [:create_snap, :register_and_login_admin]

#     test "deletes chosen snap", %{conn: conn, snap: snap} do
#       conn = delete(conn, Routes.snap_path(conn, :delete, snap))
#       assert redirected_to(conn) == Routes.snap_path(conn, :index)

#       assert_error_sent 404, fn ->
#         get(conn, Routes.snap_path(conn, :show, snap))
#       end
#     end
#   end

#   defp create_snap(_), do: {:ok, snap: insert(:snap)}
# end
