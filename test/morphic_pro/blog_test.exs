defmodule MorphicPro.BlogTest do
  use MorphicPro.DataCase

  alias MorphicPro.Accounts.User
  alias MorphicPro.Blog

  import MorphicPro.Factory

  describe "posts" do
    # NOTE: dissolver's per_page: 2 for test

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

    test "list_latest_snaps/0 returns 4 of the latest published snaps" do
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: 1), tags: [])
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])
      insert(:snap, published_at: Timex.today(), draft: true, tags: [])
      snap1 = insert(:snap, published_at: Timex.today(), tags: [])
      snap2 = insert(:snap, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      snap3 = insert(:snap, published_at: Timex.today() |> Timex.shift(days: -2), tags: [])
      snap4 = insert(:snap, published_at: Timex.today() |> Timex.shift(days: -3), tags: [])
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: -4), tags: [])

      list_latest_snaps = Blog.list_latest_snaps()
      assert list_latest_snaps == [snap1, snap2, snap3, snap4]
    end

    test "list_posts/2 non admin" do
      insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])
      insert(:post, published_at: Timex.today(), draft: true, tags: [])

      post1 = insert(:post, published_at: Timex.today(), tags: [])
      post2 = insert(:post, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: -2), tags: [])

      {list_posts, _} = Blog.list_posts(%{}, %{})

      assert list_posts ==
               [post1, post2]
               |> Enum.map(
                 &%{
                   &1
                   | body: nil,
                     large_img: nil,
                     published_at_local: nil,
                     tags_string: nil,
                     updated_at: nil
                 }
               )
    end

    test "list_snaps/2 non admin" do
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: 1), tags: [])
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])
      insert(:snap, published_at: Timex.today(), draft: true, tags: [])

      snap1 = insert(:snap, published_at: Timex.today(), tags: [])
      snap2 = insert(:snap, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: -2), tags: [])

      {list_snaps, _} = Blog.list_snaps(%{}, %{})
      assert list_snaps == [snap1, snap2]
    end

    test "list_posts/2 admin" do
      post1 = insert(:post, published_at: Timex.today() |> Timex.shift(days: 2), tags: [])

      post2 =
        insert(:post, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])

      insert(:post, published_at: Timex.today(), draft: true, tags: [])
      insert(:post, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])

      {list_posts, %{per_page: 2, total_count: 4, total_pages: 2}} =
        Blog.list_posts(%{}, %User{admin: true})

      assert list_posts ==
               [post1, post2]
               |> Enum.map(
                 &%{
                   &1
                   | body: nil,
                     large_img: nil,
                     published_at_local: nil,
                     tags_string: nil,
                     updated_at: nil
                 }
               )
    end

    test "list_snaps/2 admin" do
      spap1 = insert(:snap, published_at: Timex.today() |> Timex.shift(days: 2), tags: [])

      spap2 =
        insert(:snap, published_at: Timex.today() |> Timex.shift(days: 1), draft: true, tags: [])

      insert(:snap, published_at: Timex.today(), draft: true, tags: [])
      insert(:snap, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])

      {list_snaps, %{per_page: 2, total_count: 4, total_pages: 2}} =
        Blog.list_snaps(%{}, %User{admin: true})

      assert list_snaps == [spap1, spap2]
    end

    test "get_post!/3 non admin returns for published" do
      post = insert(:post)
      published_post = Blog.get_post!(post.slug, %{}, preload: [:tags])
      assert published_post == post
    end

    test "get_snaps!/3 non admin returns for published" do
      snap = insert(:snap)
      published_snap = Blog.get_snap!(snap.id, %{}, preload: [:tags])
      assert published_snap == snap
    end

    test "get_post!/2 non admin returns for published" do
      post = insert(:post, tags: []) |> unpreload(:tags, :many)
      published_post = Blog.get_post!(post.slug, %{})
      assert published_post == post
    end

    test "get_snap!/2 non admin returns for published" do
      snap = insert(:snap, tags: []) |> unpreload(:tags, :many)
      published_snap = Blog.get_snap!(snap.id, %{})
      assert published_snap == snap
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

    test "get_snapt!/2 non admin raises for nonpublished" do
      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_snap!(insert(:snap, draft: true).id, %{})
      end

      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_snap!(insert(:snap, published_at: Timex.shift(Timex.today(), days: 1)).id, %{})
      end

      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_snap!(
          insert(:snap, published_at: Timex.shift(Timex.today(), days: 1), draft: true).id,
          %{}
        )
      end

      assert_raise Ecto.NoResultsError, fn ->
        Blog.get_snap!(
          "foo",
          %{}
        )
      end
    end

    test "get_post!/3 admin returns for draft" do
      post = insert(:post, draft: true)
      published_post = Blog.get_post!(post.slug, %User{admin: true}, preload: [:tags])
      assert published_post == post
    end

    test "get_snap!/3 admin returns for draft" do
      snap = insert(:snap, draft: true)
      published_snap = Blog.get_snap!(snap.id, %User{admin: true}, preload: [:tags])
      assert published_snap == snap
    end

    test "get_post!/2 admin returns for draft" do
      post = insert(:post, draft: true) |> unpreload(:tags, :many)
      published_post = Blog.get_post!(post.slug, %User{admin: true})
      assert published_post == post
    end

    test "get_snap!/2 admin returns for draft" do
      snap = insert(:snap, draft: true) |> unpreload(:tags, :many)
      published_snap = Blog.get_snap!(snap.id, %User{admin: true})
      assert published_snap == snap
    end

    test "get_post!/3 admin returns for predate" do
      post = insert(:post, published_at: Timex.shift(Timex.today(), days: 1))
      published_post = Blog.get_post!(post.slug, %User{admin: true}, preload: [:tags])
      assert published_post == post
    end

    test "get_snap!/3 admin returns for predate" do
      snap = insert(:snap, published_at: Timex.shift(Timex.today(), days: 1))
      published_snap = Blog.get_snap!(snap.id, %User{admin: true}, preload: [:tags])
      assert published_snap == snap
    end

    test "get_post!/3 admin returns for predate draft" do
      post = insert(:post, published_at: Timex.shift(Timex.today(), days: 1), draft: true)
      published_post = Blog.get_post!(post.slug, %User{admin: true}, preload: [:tags])
      assert published_post == post
    end

    test "get_snap!/3 admin returns for predate draft" do
      snap = insert(:snap, published_at: Timex.shift(Timex.today(), days: 1), draft: true)
      published_snap = Blog.get_snap!(snap.id, %User{admin: true}, preload: [:tags])
      assert published_snap == snap
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

    test "create_snap/1" do
      snap_params = params_for(:random_snap)
      {:ok, new_snap} = Blog.create_snap(snap_params)

      assert new_snap.body == snap_params.body
      assert new_snap.published_at_local == snap_params.published_at_local
      assert new_snap.draft == snap_params.draft
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

    test "update_snap/2" do
      snap = insert(:snap)
      snap_params = params_for(:random_snap)
      {:ok, updated_snap} = Blog.update_snap(snap, snap_params)

      assert updated_snap.body == snap_params.body
      assert updated_snap.published_at_local == snap_params.published_at_local
      assert updated_snap.draft == snap_params.draft
    end

    test "delete_post/1" do
      post = insert(:post) |> unpreload(:tags, :many)

      {:ok, deleted_post} = Blog.delete_post(post)
      assert deleted_post.id == post.id
      assert MorphicPro.Blog.Post |> MorphicPro.Repo.get(post.id) == nil
    end

    test "delete_snap/1" do
      snap = insert(:snap) |> unpreload(:tags, :many)

      {:ok, deleted_snap} = Blog.delete_snap(snap)
      assert deleted_snap.id == snap.id
      assert MorphicPro.Blog.Snap |> MorphicPro.Repo.get(snap.id) == nil
    end

    test "change_post/1 returns a ecto changeset given you provide a Post struct" do
      post = insert(:post)
      %Ecto.Changeset{} = cs = Blog.change_post(post)
      assert cs.data == post
    end

    test "change_snap/1 returns a ecto changeset given you provide a snap struct" do
      snap = insert(:snap)
      %Ecto.Changeset{} = cs = Blog.change_snap(snap)
      assert cs.data == snap
    end

    test "get_post_for_tag!/2 looks up a tag and gets all the posts for it " do
      %{tags: [%{name: tag_name} = tag | _t]} = post = insert(:post)

      {%{posts: [found_post]} = found_tag, _} = Blog.get_post_for_tag!(tag_name, %{admin: true})

      assert found_tag |> unpreload(:posts, :many) == tag
      assert found_post == post
    end

    test "get_snap_for_tag!/2 looks up a tag and gets all the snaps for it " do
      %{tags: [%{name: tag_name} = tag | _t]} = snap = insert(:snap)
      {%{snaps: [found_snap]} = found_tag, _} = Blog.get_snap_for_tag!(tag_name, %{admin: true})

      assert found_tag |> unpreload(:snaps, :many) == tag
      assert found_snap == snap
    end

    test "inc_likes/1 incerments likes for a given post and broadcasts the event" do
      post = insert(:post, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      assert post.likes_count == 0
      {:ok, updated_post} = Blog.inc_likes(post)
      assert updated_post.likes_count == 1
    end

    test "inc_likes/1 incerments likes for a given snap and broadcasts the event" do
      snap = insert(:snap, published_at: Timex.today() |> Timex.shift(days: -1), tags: [])
      assert snap.likes_count == 0
      {:ok, updated_snap} = Blog.inc_likes(snap)
      assert updated_snap.likes_count == 1
    end
  end
end
