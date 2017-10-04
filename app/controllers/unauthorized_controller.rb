class UnauthorizedController < ApplicationController
  layout false, only: [:show]
  def show
  end
end
