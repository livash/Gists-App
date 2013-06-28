class GistsController < ApplicationController
  before_filter :authenticate

  def index
    @gists = current_user.gists
    render json: @gists, :include => :favorites
  end

end
