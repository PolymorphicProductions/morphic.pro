defmodule MorphicProWeb.Pow.Messages do
  @moduledoc """
    Custom Gettext stuff
  """
  use Pow.Phoenix.Messages

  use Pow.Extension.Phoenix.Messages,
    extensions: [PowResetPassword, PowEmailConfirmation]

  import MorphicProWeb.Gettext

  @doc """
  Message for when user is not authenticated.
  Defaults to nil.
  """
  def user_not_authenticated(_conn), do: gettext("Need to sign in before you can view this.")

  @doc """
  Message for when user is already authenticated.
  Defaults to nil.
  """
  def user_already_authenticated(_conn), do: gettext("You already signed in.")

  @doc """
  Message for when user has signed in.
  Defaults to nil.
  """
  def signed_in(_conn), do: gettext("Your account has been signed in.")

  @doc """
  Message for when user has signed out.
  Defaults to nil.
  """
  def signed_out(_conn), do: gettext("Your account has been signed out.")

  @doc """
  Message for when user couldn't be signed in.
  """
  def invalid_credentials(_conn),
    do:
      gettext(
        "The provided login details did not work. Please verify your credentials, and try again."
      )

  @doc """
  Message for when user has signed up successfully.
  Defaults to nil.
  """
  def user_has_been_created(_conn), do: gettext("Your account has been created.")

  @doc """
  Message for when user has updated their account successfully.
  """
  def user_has_been_updated(_conn), do: gettext("Your account has been updated.")

  @doc """
  Message for when user has deleted their account successfully.
  """
  def user_has_been_deleted(_conn),
    do: gettext("Your account has been deleted. Sorry to see you go!")

  @doc """
  Message for when account could not be deleted.
  """
  def user_could_not_be_deleted(_conn), do: gettext("Your account could not be deleted.")
end
