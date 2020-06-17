defmodule MorphicProWeb.PageLive.Terms do
  use MorphicProWeb, :live_view
  
  alias MorphicPro.Accounts

  @impl true
  def mount(_params, session, socket) do
    if user = session["user_token"] && Accounts.get_user_by_session_token(session["user_token"]) do
      {:ok, assign(socket, current_user: user)}
    else
      {:ok, assign(socket, current_user: nil)}
    end
  end

  @impl true
  def handle_params(_params, _session, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action)}
  end

  defp apply_action(socket, :terms) do
    socket
    |> assign(page_title: "Terms")
  end
end
