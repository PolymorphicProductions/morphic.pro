defmodule MorphicPro.PolicyTest do
  use MorphicPro.DataCase
  alias MorphicPro.Policy

  describe "authorize/3" do
    test "with admin returns true" do
      assert Policy.authorize(nil, %{admin: true}, nil) == true
    end
    test "authorize/3 with anything other than admin returns false" do
      assert Policy.authorize(nil, nil, nil) == false
    end
  end

  # describe "authorize/3" do
  #   test "with admin returns true" do
  #     assert Bodyguard.permit(Blog, :edit, %User{admin: true}, nil) == :ok
  #   end
  #   test "authorize/3 with anything other than admin returns false" do
  #     assert Bodyguard.permit(Blog, :edit, %User{}, nil) == {:error, :unauthorized}
  #   end
  # end
end
