defmodule MorphicProWeb.Router do
  use MorphicProWeb, :router

  import Phoenix.LiveDashboard.Router
  import MorphicProWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :admins_only do
    plug MorphicProWeb.Plug.AdminsOnly
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :require_authenticated_user, :admins_only]
    live_dashboard "/dashboard", metrics: MorphicProWeb.Telemetry
  end

  scope "/", MorphicProWeb do
    pipe_through [:browser, :redirect_if_user_is_authenticated]

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
    pipe_through [:browser, :require_authenticated_user]

    resources "/posts", PostController,
      only: [:edit, :new, :create, :update, :delete],
      param: "slug"

    resources "/snaps", SnapController, only: [:edit, :new, :create, :update, :delete]

    delete "/users/logout", UserSessionController, :delete
    get "/users/settings", UserSettingsController, :edit
    put "/users/settings/update_password", UserSettingsController, :update_password
    put "/users/settings/update_email", UserSettingsController, :update_email
    get "/users/settings/confirm_email/:token", UserSettingsController, :confirm_email
  end

  scope "/", MorphicProWeb do
    pipe_through :browser

    get "/users/confirm", UserConfirmationController, :new
    post "/users/confirm", UserConfirmationController, :create
    get "/users/confirm/:token", UserConfirmationController, :confirm

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
    pipe_through [:api, :admins_only]

    put "/gen_presigned_url", PresignedUrlController, :gen_presigned_url
  end
end
