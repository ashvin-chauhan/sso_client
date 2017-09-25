class HomeController < ApplicationController
	layout false, only: [:show]
  def show
    # If logged in, redirect to /dashboard
  end
end
