require 'test_helper'

class DevelopersControllerTest < ActionDispatch::IntegrationTest
  test "should get restful_api" do
    get developers_restful_api_url
    assert_response :success
  end

end
