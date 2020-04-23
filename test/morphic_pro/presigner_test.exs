defmodule MorphicPro.PresignerTest do
  use MorphicPro.DataCase

  test "foo" do
    # "https://s3.us-west-2.amazonaws.com/
    # morphicpro/
    # something.txt?
    # ACL=public-read&
    # ContentType=image%2Fjpeg&
    # X-Amz-Algorithm=AWS4-HMAC-SHA256&
    # X-Amz-Credential=AKIAJ52D2C22RFUYXDSA%2F20200423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200423T212404Z&
    # X-Amz-Expires=3600&X-Amz-SignedHeaders=host&
    # X-Amz-Signature=e3499440ffe3ae7c8ecac0dec14cd22bb9df8a4a632c3ac49f53da8c437b5a22"

    %{upload_url: url} = MorphicPro.Presigner.get_presigned_url("something.txt")
    assert url =~ "something.txt"
  end
end
