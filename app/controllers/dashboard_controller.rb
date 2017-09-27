class DashboardController < ApplicationController
 # 	require 'open-uri'
	include Secured
	# layout false, only: [:show]

  def show
  	# @source = open("http://localhost:5000//jekyll/update/2017/09/21/post-3.html"){|f|f.read}
  	if current_user[:role] === "developer"
  		render template: "shared/developer", layout: "developer_layout"
  	elsif current_user[:role] === "manager" || current_user[:role] == "admin"
      render template: "shared/manager", layout: "manager_layout"
    end
  end
end
