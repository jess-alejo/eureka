require "application_system_test_case"

class NuggetsTest < ApplicationSystemTestCase
  setup do
    @nugget = nuggets(:one)
  end

  test "visiting the index" do
    visit nuggets_url
    assert_selector "h1", text: "Nuggets"
  end

  test "creating a Nugget" do
    visit nuggets_url
    click_on "New Nugget"

    fill_in "Content", with: @nugget.content
    fill_in "Title", with: @nugget.title
    click_on "Create Nugget"

    assert_text "Nugget was successfully created"
    click_on "Back"
  end

  test "updating a Nugget" do
    visit nuggets_url
    click_on "Edit", match: :first

    fill_in "Content", with: @nugget.content
    fill_in "Title", with: @nugget.title
    click_on "Update Nugget"

    assert_text "Nugget was successfully updated"
    click_on "Back"
  end

  test "destroying a Nugget" do
    visit nuggets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Nugget was successfully destroyed"
  end
end
