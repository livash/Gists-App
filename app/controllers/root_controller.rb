class RootController < ApplicationController
  before_filter :authenticate

  def root
    render :root
  end

end
