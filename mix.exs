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
      extra_applications: [:logger, :runtime_tools, :mnesia]
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
      {:bcrypt_elixir, "~> 2.0"},
      {:phoenix, "~> 1.5.0-rc.0", override: true},
      {:phoenix_pubsub, "~> 2.0"},
      {:phoenix_ecto, "~> 4.0"},
      {:ecto_sql, "~> 3.1"},
      {:postgrex, ">= 0.0.0"},
      {:phoenix_html, "~> 2.11"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:gettext, "~> 0.11"},
      {:jason, "~> 1.2", override: true},
      {:plug_cowboy, "~> 2.1"},
      {:dialyxir, "~> 0.5", only: [:dev], runtime: false},
      {:bamboo, "~> 1.4"},
      {:timex, "~> 3.6.1"},
      {:slugify, "~> 1.3.0"},
      {:earmark, "~> 1.3.0"},
      {:bodyguard, "~> 2.4.0"},
      {:dissolver, github: "MorphicPro/dissolver"},
      {:ex_machina, "~> 2.4.0", only: :test},
      {:faker, "~> 0.13.0", only: :test},
      {:excoveralls, "0.12.3", only: [:test, :dev]},
      {:credo, "1.3.0", only: [:dev, :test], runtime: false},
      {:ex_aws, "~> 2.1"},
      {:ex_aws_s3, "~> 2.0"},
      {:hackney, "~> 1.9"},
      {:sweet_xml, "~> 0.6"},
      {:phoenix_live_dashboard, "~> 0.1"},
      {:telemetry_poller, "~> 0.4"},
      {:telemetry_metrics, "~> 0.4"}
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
