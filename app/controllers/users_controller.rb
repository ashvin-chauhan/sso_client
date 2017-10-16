class UsersController < ApplicationController
  layout :fetch_layout, except: [:logout]
  before_action :logged_in_using_omniauth?, except: [:logout]
  before_action :get_user_links, only: [:autocomplete_sidebar_links]

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

  def autocomplete_sidebar_links
    require 'json'

    @filter_links = @links.select { |data| data['title'].downcase.include? params[:term].downcase }
    unless @filter_links.count > 0; @filter_links = [{"title" => "No results found!", "url" => ""}]; end

    respond_to do |format|
      format.html { @filter_links = Kaminari.paginate_array(@filter_links).page(params[:page]).per(params[:per] || 10) }
      format.json { @filter_links }
    end
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

  def get_user_links
    case current_user[:role]
    when "super_admin"
      @links = JSON.parse(File.read("super_admin_links.json"))
    when "admin"
      @links = JSON.parse(File.read("admin_links.json"))
    when "manager"
      @links = JSON.parse(File.read("manager_links.json"))
    when "developer"
      @links = JSON.parse(File.read("developer_links.json"))
    end
  end
end
