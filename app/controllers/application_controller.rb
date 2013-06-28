class ApplicationController < ActionController::Base
  protect_from_forgery

  include SessionsHelper

  def authenticate
    unless logged_in?
      redirect_to new_session_url
    end
  end

  def redirect_logged_in_user
    if logged_in?
      flash[:errors] ||= []
      flash[:errors] << "You are already logged in"
      redirect_to current_user
    end
  end
end
