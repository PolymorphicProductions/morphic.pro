defmodule MorphicPro.Plug.NavbarSmall do
  import Plug.Conn

  def init(default), do: default

  def call(conn, _default) do
    assign(conn, :nav_class, "navbar-small")
  end
end
