defmodule MorphicProWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels and so on.

  This can be used in your application as:

      use MorphicProWeb, :controller
      use MorphicProWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below. Instead, define any helper function in modules
  and import those modules here.
  """

  def controller do
    quote do
      use Phoenix.Controller, namespace: MorphicProWeb

      import Plug.Conn
      import MorphicProWeb.Gettext
      alias MorphicProWeb.Router.Helpers, as: Routes

      action_fallback(MorphicPro.FallbackController)
    end
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/morphic_pro_web/templates",
        namespace: MorphicProWeb

      # Import convenience functions from controllers
      import Phoenix.Controller,
        only: [get_flash: 1, get_flash: 2, view_module: 1, view_template: 1]

      import Dissolver.HTML

      # Include shared imports and aliases for views
      unquote(view_helpers())

      def parse_date(d), do: Timex.format!(d, "{Mshort} {D}, {YYYY}")

      def parse_markdown(text) do
        # TODO: Capture the 3 item in the tuple that comes from `Earmark.as_html` and send to logs
        case Earmark.as_html(text, pure_links: true) do
          {:ok, html_doc, _} ->
            html_doc

          {:error, _html_doc, error_messages} ->
            error_messages
        end
      end
    end
  end

  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {MorphicProWeb.LayoutView, "live.html"}

      unquote(view_helpers())
    end
  end

  def live_component do
    quote do
      use Phoenix.LiveComponent

      unquote(view_helpers())
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
      import Phoenix.LiveView.Router
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import MorphicProWeb.Gettext
    end
  end

  def mailer_view do
    quote do
      use Phoenix.View,
        root: "lib/morphic_pro_web/templates",
        namespace: MorphicProWeb

      use Phoenix.HTML

      import Phoenix.Controller, only: [get_flash: 1, get_flash: 2, view_module: 1]
      import MorphicProWeb.Gettext

      alias MorphicProWeb.Router.Helpers, as: Routes
    end
  end

  defp view_helpers do
    quote do
      # Use all HTML functionality (forms, tags, etc)
      use Phoenix.HTML

      # Import LiveView helpers (live_render, live_component, live_patch, etc)
      import Phoenix.LiveView.Helpers

      # Import basic rendering functionality (render, render_layout, etc)
      import Phoenix.View

      import MorphicProWeb.ErrorHelpers
      import MorphicProWeb.Gettext
      alias MorphicProWeb.Router.Helpers, as: Routes
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
