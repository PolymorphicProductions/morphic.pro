defmodule MorphicPro.Captcha do
  # allow customize receive timeout, default: 10_000
  def get(timeout \\ 4_000) do
    path = Path.join(:code.priv_dir(:captcha), "captcha") |> IO.inspect()

    Port.open({:spawn, path}, [:binary])

    # Allow set receive timeout
    receive do
      {_, {:data, data}} ->
        <<text::bytes-size(5), img::binary>> = data
        {:ok, text, img}

      other ->
        other
    after
      timeout ->
        {:timeout}
    end
  end
end
