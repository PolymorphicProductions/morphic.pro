defmodule MorphicProWeb.Router do
  use MorphicProWeb, :router
  use Pow.Phoenix.Router

  use Pow.Extension.Phoenix.Router,
    extensions: [PowResetPassword, PowEmailConfirmation]

  import Phoenix.LiveDashboard.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :admins_only do
    plug MorphicProWeb.Plug.AdminsOnly
  end

  pipeline :protected do
    plug Pow.Plug.RequireAuthenticated,
      error_handler: Pow.Phoenix.PlugErrorHandler
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :browser
    pow_routes()
    pow_extension_routes()
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :protected, :admins_only]
    live_dashboard "/dashboard", metrics: MorphicProWeb.Telemetry
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :protected]

    resources "/posts", PostController,
      only: [:edit, :new, :create, :update, :delete],
      param: "slug"

    resources "/snaps", SnapController, only: [:edit, :new, :create, :update, :delete]

    post "/registration/send-confirmation-email",
         RegistrationController,
         :resend_confirmation_email
  end

  scope "/", MorphicProWeb do
    pipe_through :browser

    get("/posts/tag/:tag", TagController, :show_post, as: :post_tag)
    resources "/posts", PostController, only: [:index, :show], param: "slug"

    get("/snaps/tag/:tag", TagController, :show_snap, as: :snap_tag)
    resources "/snaps", SnapController, only: [:index, :show]

    get "/", PageController, :index
  end

  if Mix.env() == :dev do
    forward "/sent_emails", Bamboo.SentEmailViewerPlug
  end

  # Other scopes may use custom stacks.
  scope "/api", MorphicProWeb do
    pipe_through [:api, :protected]

    put "/gen_presigned_url", PresignedUrlController, :gen_presigned_url
  end
end
