defmodule MorphicPro.BlogTest do
  use MorphicPro.DataCase

  alias MorphicPro.Blog
  alias MorphicPro.Users.User

  import MorphicPro.Factory

  describe "posts" do
    # NOTE: kerosene's per_page: 2 for test

    test "list_latest_posts/0 returns 4 of the latest published posts" do
      insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])
      insert(:post, published_at: Timex.today(), draft: true, tags: [])
      post1 = insert(:post, published_at: Timex.today(), tags: [])
      post2 = insert(:post, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      post3 = insert(:post, published_at: Timex.today() |> Timex.shift(days: -2), tags: [])
      post4 = insert(:post, published_at: Timex.today() |> Timex.shift(days: -3), tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: -4), tags: [])

      list_latest_posts = Blog.list_latest_posts()
      assert list_latest_posts == [post1, post2, post3, post4]
    end

    test "list_posts/2 non admin" do
      insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])
      insert(:post, published_at: Timex.today(), draft: true, tags: [])

      post1 = insert(:post, published_at: Timex.today(), tags: [])
      post2 = insert(:post, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: -2), tags: [])

      {list_posts, _} = Blog.list_posts(%{}, %{})
      assert list_posts == [post1, post2]
    end

    test "list_posts/2 admin" do
      post1 = insert(:post, published_at: Timex.today() |> Timex.shift(days: 2), tags: [])

      post2 =
        insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])

      insert(:post, published_at: Timex.today(), draft: true, tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])

      {list_posts, %{per_page: 2, total_count: 4, total_pages: 2}} = Blog.list_posts(%{}, %User{admin: true})
      assert list_posts == [post1, post2]
    end

    test "get_post!/3 non admin returns for published" do
      post = insert(:post)
      published_post = Blog.get_post!(post.slug, %{}, preload: [:tags])
      assert published_post == post
    end

    test "get_post!/2 non admin returns for published" do
      post = insert(:post, tags: []) |> unpreload(:tags, :many)
      published_post = Blog.get_post!(post.slug, %{})
      assert published_post == post
    end

    test "get_post!/2 non admin raises for nonpublished" do
      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_post!(insert(:post, draft: true).slug, %{})
      end

      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_post!(insert(:post, published_at: Timex.shift(Timex.today(), days: 1)).slug, %{})
      end

      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_post!(
          insert(:post, published_at: Timex.shift(Timex.today(), days: 1), draft: true).slug,
          %{}
        )
      end
    end

    test "get_post!/3 admin returns for draft" do
      post = insert(:post, draft: true)
      published_post = Blog.get_post!(post.slug, %User{admin: true}, preload: [:tags])
      assert published_post == post
    end

    test "get_post!/2 admin returns for draft" do
      post = insert(:post, draft: true) |> unpreload(:tags, :many)
      published_post = Blog.get_post!(post.slug, %User{admin: true})
      assert published_post == post
    end

    test "get_post!/3 admin returns for predate" do
      post = insert(:post, published_at: Timex.shift(Timex.today(), days: 1))
      published_post = Blog.get_post!(post.slug, %User{admin: true}, preload: [:tags])
      assert published_post == post
    end

    test "get_post!/3 admin returns for predate draft" do
      post = insert(:post, published_at: Timex.shift(Timex.today(), days: 1), draft: true)
      published_post = Blog.get_post!(post.slug, %User{admin: true}, preload: [:tags])
      assert published_post == post
    end

    # TODO: make better test for asseting tags
    test "create_post/1" do
      post_params = params_for(:random_post)
      {:ok, new_post} = Blog.create_post(post_params)

      assert new_post.title == post_params.title
      assert new_post.body == post_params.body
      assert new_post.excerpt == post_params.excerpt
      assert new_post.published_at_local == post_params.published_at_local
      assert new_post.draft == post_params.draft
    end

    test "update_post/2" do
      post = insert(:post)
      post_params = params_for(:random_post)
      {:ok, updated_post} = Blog.update_post(post, post_params)

      assert updated_post.title == post_params.title
      assert updated_post.body == post_params.body
      assert updated_post.excerpt == post_params.excerpt
      assert updated_post.published_at_local == post_params.published_at_local
      assert updated_post.draft == post_params.draft
    end

    # TODO: figure out if I need to create a transaction
    # and manually delete join before I delete the post
    test "delete_post/1" do
      post = insert(:post) |> unpreload(:tags, :many) |> IO.inspect

      {:ok, deleted_post} = Blog.delete_post(post)
      assert deleted_post == post

      assert_raise Ecto.NoResultsError, fn ->
        Post |> Repo.find(deleted_post.id)
      end
    end

    # test "change_post/1" do
    # end

    # test "get_post_for_tag!/2" do
    # end
  end
end
