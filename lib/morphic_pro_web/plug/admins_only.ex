defmodule MorphicProWeb.Plug.AdminsOnly do
  import Plug.Conn

  def init(options), do: options

  def call(conn, _opts) do
    case conn do
      %{assigns: %{current_user: %{admin: true}}} ->
        conn

      _ ->
        conn
        |> send_resp(403, "Unauthorized 403")
        |> halt()
    end
  end
end
