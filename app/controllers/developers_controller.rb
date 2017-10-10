class DevelopersController < ApplicationController
	include Secured
	layout "developer_layout"
	before_action :check_authentication

  def restful_api
  end

  private
  def check_authentication
  	unless current_user[:role] === "super_admin" || current_user[:role] === "developer"
  		redirect_to :back, notice: "You are not authorized."
  	end
  end
end
