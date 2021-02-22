defmodule MorphicPro.MixProject do
  use Mix.Project

  def project do
    [
      app: :morphic_pro,
      releases: [
        prod: [
          include_executables_for: [:unix],
          steps: [:assemble, :tar]
        ]
      ],
      version: "0.1.0",
      elixir: "~> 1.5",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps(),
      test_coverage: [tool: ExCoveralls],
      preferred_cli_env: [t: :test, "coveralls.html": :test]
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {MorphicPro.Application, []},
      extra_applications: [:captcha, :logger, :runtime_tools, :os_mon]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:bcrypt_elixir, "~> 2.3"},
      {:phoenix, "~> 1.5.6"},
      {:phoenix_pubsub, "~> 2.0"},
      {:phoenix_ecto, "~> 4.0"},
      {:ecto_sql, "~> 3.5.3"},
      {:postgrex, ">= 0.15.7"},
      {:phoenix_html, "~> 2.14.3"},
      {:gettext, "~> 0.11"},
      {:jason, "~> 1.2", override: true},
      {:plug_cowboy, "~> 2.4.1"},
      {:bamboo, "~> 2.0"},
      {:timex, "~> 3.6.3"},
      {:slugify, "~> 1.3.0"},
      {:earmark, "~> 1.4.13"},
      {:bodyguard, "~> 2.4.0"},
      {:dissolver, "~> 0.9.4"},
      {:ex_aws, "~> 2.1.6"},
      {:ex_aws_s3, "~> 2.0"},
      {:hackney, "~> 1.17"},
      {:sweet_xml, "~> 0.6"},
      {:phoenix_live_view, "~> 0.14.8"},
      {:phoenix_live_dashboard, "~> 0.3.6"},
      {:ecto_psql_extras, "~>0.6.2"},
      {:telemetry_poller, "~> 0.4"},
      {:telemetry_metrics, "~> 0.4"},
      {:captcha, "~> 0.1.0"},
      {:phoenix_live_reload, "~> 1.3", only: :dev},
      {:sobelow, "~> 0.11", only: :dev},
      {:dialyxir, "~> 1.0", only: [:dev], runtime: false},
      {:floki, ">= 0.30.0", only: :test},
      {:ex_machina, "~> 2.6.0", only: :test},
      {:faker, "~> 0.16.0", only: :test},
      {:excoveralls, "0.14.0", only: [:test, :dev]},
      {:credo, "1.5.5", only: [:dev, :test], runtime: false},
      {:sentry, "~> 8.0.3"},
      {:benchee, "~> 1.0", only: :dev}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate", "test"],
      t: ["ecto.create --quiet", "ecto.migrate", "coveralls.html", "credo --strict"]
    ]
  end
end
