use Mix.Config

# Configure your database
config :morphic_pro, MorphicPro.Repo,
  username: "postgres",
  password: "postgres",
  database: "morphic_pro_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :morphic_pro, MorphicProWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :kerosene, theme: MorphicProWeb.Kerosene.HTML.Tailwind, per_page: 2
