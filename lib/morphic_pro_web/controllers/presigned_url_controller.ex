defmodule MorphicProWeb.PresignedUrlController do
  use MorphicProWeb, :controller
  alias MorphicPro.Presigner

  def action(conn, _) do
    apply(__MODULE__, action_name(conn), [conn, conn.params, conn.assigns])
  end

  def gen_presigned_url(conn, %{"file" => file}, %{current_user: current_user}) do
    with :ok <- Bodyguard.permit(Presigner, :gen_presigned_url, current_user, nil),
         %{upload_url: url} <- Presigner.get_presigned_url(file) do
      render(conn, "gen_presigned_url.json", url: url)
    end
  end
end
