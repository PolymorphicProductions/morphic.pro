defmodule MorphicPro.PresignerTest do
  use MorphicPro.DataCase

  test "get_presigned_url/1" do
    %{upload_url: url} = MorphicPro.Presigner.get_presigned_url("something.txt")
    assert url =~ "something.txt"
  end
end
