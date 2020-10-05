use Mix.Config

access_key_id = System.get_env("AWS_ACCESS_KEY_ID")
secret_access_key = System.get_env("AWS_SECRET_ACCESS_KEY")

# Configure your database
config :morphic_pro, MorphicPro.Repo,
  username: "postgres",
  password: "postgres",
  database: "morphic_pro_dev",
  hostname: System.get_env("DB_HOST") || "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with webpack to recompile .js and .css sources.
config :morphic_pro, MorphicProWeb.Endpoint,
  https: [
    port: 4001,
    cipher_suite: :strong,
    certfile: "priv/cert/selfsigned.pem",
    keyfile: "priv/cert/selfsigned_key.pem"
  ],
  debug_errors: false,
  code_reloader: true,
  check_origin: false
  # watchers: [
  #   node: [
  #     "node_modules/webpack/bin/webpack.js",
  #     "--config",
  #     "webpack.dev.config.js",
  #     "--watch-stdin",
  #     "--colors",
  #     cd: Path.expand("../assets", __DIR__)
  #   ]
  # ]

# ## SSL Support
#
# In order to use HTTPS in development, a self-signed
# certificate can be generated by running the following
# Mix task:
#
#     mix phx.gen.cert
#
# Note that this task requires Erlang/OTP 20 or later.
# Run `mix help phx.gen.cert` for more information.
#
# The `http:` config above can be replaced with:
#
#     https: [
#       port: 4001,
#       cipher_suite: :strong,
#       keyfile: "priv/cert/selfsigned_key.pem",
#       certfile: "priv/cert/selfsigned.pem"
#     ],
#
# If desired, both `http:` and `https:` keys can be
# configured to run both http and https servers on
# different ports.

# Watch static and templates for browser reloading.
config :morphic_pro, MorphicProWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/morphic_pro_web/(live|views)/.*(ex)$",
      ~r"lib/morphic_pro_web/templates/.*(eex)$"
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Initialize plugs at runtime for faster development compilation
config :phoenix, :plug_init_mode, :runtime

config :dissolver, per_page: 3

config :ex_aws,
  access_key_id: access_key_id,
  secret_access_key: secret_access_key
