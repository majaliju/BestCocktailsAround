class ApplicationController < ActionController::API
  include ActionController::Cookies

  ##! here is where I'll contain the user authorization pre-checks


  ##! this model is for finding the user's location via IP or location allowed
  def location_finder
    ## writing the method out
  end


  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
end
