# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

access_key_id =
  System.get_env("AWS_ACCESS_KEY_ID") ||
    raise """
    environment variable AWS_ACCESS_KEY_ID is missing.
    """

secret_access_key =
  System.get_env("AWS_SECRET_ACCESS_KEY") ||
    raise """
    environment variable AWS_SECRET_ACCESS_KEY is missing.
    """

config :morphic_pro,
  ecto_repos: [MorphicPro.Repo]

# Configures the endpoint
config :morphic_pro, MorphicProWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "7QzMQB7P1Ik7gQPUGM/4WHfFVWI6Xr+9w0vTh2pw4Rauo/LYlJ4wbegnNc+t4qVa",
  render_errors: [view: MorphicProWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MorphicPro.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "6VELWMgM"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :morphic_pro, :pow,
  user: MorphicPro.Users.User,
  repo: MorphicPro.Repo,
  web_module: MorphicProWeb,
  web_mailer_module: MorphicProWeb,
  mailer_backend: MorphicProWeb.Pow.Mailer,
  extensions: [PowResetPassword, PowEmailConfirmation],
  controller_callbacks: Pow.Extension.Phoenix.ControllerCallbacks,
  messages_backend: MorphicProWeb.Pow.Messages,
  cache_store_backend: Pow.Store.Backend.MnesiaCache

config :dissolver,
  repo: MorphicPro.Repo,
  theme: Dissolver.HTML.Tailwind,
  per_page: 21

config :morphic_pro, MorphicProWeb.Mailer,
  adapter: Bamboo.LocalAdapter,
  # optional
  open_email_in_browser_url: "https://localhost:4001/sent_emails"

config :ex_aws,
  access_key_id: access_key_id,
  secret_access_key: secret_access_key

# config :mnesia, :dir, '../'

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
