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
      preferred_cli_env: ["coveralls.html": :test]
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
      {:phoenix, "~> 1.4.15"},
      {:phoenix_pubsub, "~> 1.1"},
      {:phoenix_ecto, "~> 4.0"},
      {:ecto_sql, "~> 3.1"},
      {:postgrex, ">= 0.0.0"},
      {:phoenix_html, "~> 2.11"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:gettext, "~> 0.11"},
      {:jason, "~> 1.2", override: true},
      {:plug_cowboy, "~> 2.1"},
      {:dialyxir, "~> 0.5", only: [:dev], runtime: false},
      {:pow, "~> 1.0.19"},
      {:bamboo, "~> 1.4"},
      {:timex, "~> 3.6.1"},
      {:slugify, "~> 1.3.0"},
      {:earmark, "~> 1.3.0"},
      {:bodyguard, "~> 2.4.0"},
      # {:kerosene, github: "joshchernoff/kerosene"}
      {:kerosene, github: "PolymorphicProductions/kerosene"},
      {:ex_machina, "~> 2.4.0", only: :test},
      {:faker, "~> 0.13.0", only: :test},
      {:excoveralls, "0.12.3", only: [:test, :dev]},
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
      test: ["ecto.create --quiet", "ecto.migrate", "test"]
    ]
  end
end
