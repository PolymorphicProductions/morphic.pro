defmodule MorphicProWeb.Dissolver.HTML.TailwindTest do
  use MorphicPro.DataCase


  test "generate_links/2" do

    page_list = [
      {"First", 1, "/products?category=25&page=1", true},
      {2, 2, "/products?category=25&page=2", false},
      {3, 3, "/products?category=25&page=3", false},
      {">", 4, "/products?category=25&page=4", false},
      {"Last", 5, "/products?category=25&page=5", false}
    ]

    safe_string = "<div class=\"text-center pagination false\" role=\"pagination\"><a class=\"text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 bg-gray-300\" data-phx-link=\"patch\" data-phx-link-state=\"push\" href=\"/products?category=25&amp;page=1\">First</a><a class=\"hidden md:inline text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 \" data-phx-link=\"patch\" data-phx-link-state=\"push\" href=\"/products?category=25&amp;page=2\">2</a><a class=\"hidden md:inline text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 \" data-phx-link=\"patch\" data-phx-link-state=\"push\" href=\"/products?category=25&amp;page=3\">3</a><a class=\"text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 \" data-phx-link=\"patch\" data-phx-link-state=\"push\" href=\"/products?category=25&amp;page=4\">&gt;</a><a class=\"text-sm px-3 py-2 mx-1 rounded-lg hover:bg-gray-700 hover:text-gray-200 \" data-phx-link=\"patch\" data-phx-link-state=\"push\" href=\"/products?category=25&amp;page=5\">Last</a></div>"
  
    generated_links_list = MorphicProWeb.Dissolver.HTML.Tailwind.generate_links(page_list, false) |> Phoenix.HTML.safe_to_string
    assert generated_links_list == safe_string
  end
end