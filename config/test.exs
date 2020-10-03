use Mix.Config

# Configure your database
config :morphic_pro, MorphicPro.Repo,
  username: "postgres",
  password: "postgres",
  database: "morphic_pro_test",
  hostname: "db",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :morphic_pro, MorphicProWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :dissolver, theme: Dissolver.HTML.Tailwind, per_page: 2

config :morphic_pro, MorphicProWeb.Mailer, adapter: Bamboo.TestAdapter

config :ex_aws,
  access_key_id: "access_key_id",
  secret_access_key: "secret_access_key"

config :bcrypt_elixir, log_rounds: 4
