module Secured
  extend ActiveSupport::Concern
  include ApplicationHelper

  def logged_in_using_omniauth?
    redirect_to getAuthUrl() unless session[:userinfo].present?
  end
end
