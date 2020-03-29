defmodule MorphicProWeb.Router do
  use MorphicProWeb, :router
  use Pow.Phoenix.Router
  use Pow.Extension.Phoenix.Router,
    extensions: [PowResetPassword, PowEmailConfirmation]

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :protected do
    plug Pow.Plug.RequireAuthenticated,
      error_handler: Pow.Phoenix.PlugErrorHandler
  end

  # pipeline :api do
  #   plug :accepts, ["json"]
  # end

  scope "/" do
    pipe_through :browser
    pow_routes()
    pow_extension_routes()
  end

  scope "/", MorphicProWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :protected]

    post "/registration/send-confirmation-email", RegistrationController, :resend_confirmation_email
  end

  if Mix.env == :dev do
    forward "/sent_emails", Bamboo.SentEmailViewerPlug
  end

  # Other scopes may use custom stacks.
  # scope "/api", MorphicProWeb do
  #   pipe_through :api
  # end
end
