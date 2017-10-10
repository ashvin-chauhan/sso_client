class UsersController < ApplicationController
	layout :fetch_layout, except: [:logout]
	before_action :logged_in_using_omniauth?, except: [:logout]

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

	def logout
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
