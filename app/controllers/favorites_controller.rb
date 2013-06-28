class FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(:gist_id => params[:gist_id], :user_id => current_user.id);
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages, :status => 422
    end
  end

  def destroy

    @favorite = Favorite.find_by_gist_id(params[:gist_id])
    @favorite.destroy
    render :json => nil
  end

  def index
    render :json => current_user.favorite_gists
  end

end
