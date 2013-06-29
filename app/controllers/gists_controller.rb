class GistsController < ApplicationController
  before_filter :authenticate

  def index
    @gists = current_user.gists
    render json: @gists, :include => [:favorites, :gist_files]
  end

  def create
    debugger
    @gist = current_user.gists.create(params[:gist])
    if @gist
      render :json => @gist
    else
      render :json => @gist.errors, :status => 422
    end
  end
end
