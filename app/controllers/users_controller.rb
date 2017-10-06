class UsersController < ApplicationController
	layout :fetch_layout
	include Secured

	def super_admin
		redirect_to root_path, notice: "You are not authorized." unless current_user[:role] === "super_admin"
	end

	def admin
		redirect_to root_path, notice: "You are not authorized." unless current_user[:role] === "admin" || current_user[:role] === "super_admin"
	end

	def manager
		redirect_to root_path, notice: "You are not authorized." unless current_user[:role] === "manager" || current_user[:role] === "super_admin"
	end

	def developer
		redirect_to root_path, notice: "You are not authorized." unless current_user[:role] === "developer" || current_user[:role] === "super_admin"
	end

	private

  def fetch_layout
    case action_name
    when "admin", "manager"
      "manager_layout"
    when "developer"
      "developer_layout"
    else
      "application"
    end
  end
end
