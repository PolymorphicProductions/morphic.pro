defmodule MorphicPro.Presigner do
  defdelegate authorize(action, user, params), to: MorphicPro.Policy

  def get_presigned_url(file) do
    bucket = "morphicpro"
    config = %{region: "us-west-2"}
    query_params = [{"ContentType", "image/jpeg"}, {"ACL", "public-read"}]
    presigned_options = [virtual_host: false, query_params: query_params]

    {:ok, url} =
      ExAws.Config.new(:s3, config)
      |> ExAws.S3.presigned_url(:put, bucket, file, presigned_options)

    %{upload_url: url}
  end
end
