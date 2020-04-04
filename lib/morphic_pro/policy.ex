defmodule MorphicPro.Policy do
  @moduledoc """
    This module is the main policy for authroization in morphic.pro
  """

  @behaviour Bodyguard.Policy

  def authorize(_action, %{admin: true}, _params), do: true
  def authorize(_action, _user, _params), do: false
end
