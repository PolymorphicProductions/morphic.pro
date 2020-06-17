defmodule MorphicProWeb.Router do
  use MorphicProWeb, :router

  import Phoenix.LiveDashboard.Router
  import MorphicProWeb.UserAuth

  use Plug.ErrorHandler
  use Sentry.Plug

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {MorphicProWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :admins_only do
    plug MorphicProWeb.Plug.AdminsOnly
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_current_user
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :fetch_current_user, :require_authenticated_user, :admins_only]
    live_dashboard "/dashboard", metrics: MorphicProWeb.Telemetry
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :fetch_current_user, :redirect_if_user_is_authenticated]

    get "/users/register", UserRegistrationController, :new
    post "/users/register", UserRegistrationController, :create
    get "/users/login", UserSessionController, :new
    post "/users/login", UserSessionController, :create
    get "/users/reset_password", UserResetPasswordController, :new
    post "/users/reset_password", UserResetPasswordController, :create
    get "/users/reset_password/:token", UserResetPasswordController, :edit
    put "/users/reset_password/:token", UserResetPasswordController, :update
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :fetch_current_user, :require_authenticated_user]
    delete "/users/logout", UserSessionController, :delete
    get "/users/settings", UserSettingsController, :edit
    put "/users/settings/update_password", UserSettingsController, :update_password
    put "/users/settings/update_email", UserSettingsController, :update_email
    get "/users/settings/confirm_email/:token", UserSettingsController, :confirm_email
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :fetch_current_user]
    get "/users/confirm", UserConfirmationController, :new
    post "/users/confirm", UserConfirmationController, :create
    get "/users/confirm/:token", UserConfirmationController, :confirm
  end

  scope "/", MorphicProWeb do
    pipe_through :browser

    live "/posts/:slug/edit", PostLive.Action, :edit
    live "/snaps/:slug/edit", SnapLive.Action, :edit

    live "/posts/new", PostLive.Action, :new
    live "/snaps/new", SnapLive.Action, :new

    live "/posts/tags/:tag", PostLive.Index, :tag
    live "/snaps/tags/:tag", SnapLive.Index, :tag

    live "/posts/:slug", PostLive.Show, :show
    live "/snaps/:slug", SnapLive.Show, :show

    live "/posts", PostLive.Index, :index
    live "/snaps", SnapLive.Index, :index

    live "/about", PageLive.About, :about
    live "/privacy", PageLive.Privacy, :privacy

    live "/", PageLive.Index, :index
  end

  if Mix.env() == :dev do
    forward "/sent_emails", Bamboo.SentEmailViewerPlug
  end

  # Other scopes may use custom stacks.
  scope "/api", MorphicProWeb do
    pipe_through [:api, :admins_only]

    put "/gen_presigned_url", PresignedUrlController, :gen_presigned_url
  end
end
