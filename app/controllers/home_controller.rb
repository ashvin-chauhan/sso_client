class HomeController < ApplicationController
  def show
  end

  def docs
    doc_url = ENV['REVERSAND_JEKYLL_PATH'] + params[:page]
    @source = open(doc_url){|f|f.read}
  end
end
