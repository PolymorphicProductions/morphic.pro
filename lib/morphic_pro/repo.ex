defmodule MorphicPro.Repo do
  use Ecto.Repo,
    otp_app: :morphic_pro,
    adapter: Ecto.Adapters.Postgres
end
