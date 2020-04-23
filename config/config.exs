# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :morphic_pro,
  ecto_repos: [MorphicPro.Repo]

# Configures the endpoint
config :morphic_pro, MorphicProWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "7QzMQB7P1Ik7gQPUGM/4WHfFVWI6Xr+9w0vTh2pw4Rauo/LYlJ4wbegnNc+t4qVa",
  render_errors: [view: MorphicProWeb.ErrorView, accepts: ~w(html json)],
  pubsub_server: MorphicPro.PubSub,
  live_view: [signing_salt: "hcqqKQO9gIPicsMKVqzt/8aOa5gwIq95"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :dissolver,
  repo: MorphicPro.Repo,
  theme: Dissolver.HTML.Tailwind,
  per_page: 21

config :morphic_pro, MorphicProWeb.Mailer,
  adapter: Bamboo.LocalAdapter,
  # optional
  open_email_in_browser_url: "https://localhost:4001/sent_emails"

# config :mnesia, :dir, '../'

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
