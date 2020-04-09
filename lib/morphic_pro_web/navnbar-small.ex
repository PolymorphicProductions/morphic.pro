defmodule MorphicPro.Plug.NavbarSmall do
  @moduledoc """
    simple plug to denote if a css class should be used in a header
  """

  import Plug.Conn

  def init(default), do: default

  def call(conn, _default) do
    assign(conn, :nav_class, "navbar-small")
  end
end
