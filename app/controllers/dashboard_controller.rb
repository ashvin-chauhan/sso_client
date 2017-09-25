class DashboardController < ApplicationController
 # 	require 'open-uri'
	include Secured
	# layout false, only: [:show]

  def show
  	# @source = open("http://localhost:5000//jekyll/update/2017/09/21/post-3.html"){|f|f.read}
  end
end
