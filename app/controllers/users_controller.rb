class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]


  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  #   # PATCH/PUT /users/1
  # def update
  #   # this is the user patch version 
  #   user = User.find_by!(id: params[:id]) 
  #   # user = User.find_by!(id: session[:user_id])
  #   # get the full address comprised in one 
  #   results = Geocoder.search(params[:address])
  #   user[:latitude] = results.first.coordinates[0]
  #   user[:longitude] = results.first.coordinates[1]
  #   user[:address] = params[:address]
  #   render json: user, status: 200
  # end


  # def get_address
  #   user = User.find_by(id: session[:user_id])
  #   user[:address] = params[:address]
  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end
    
  # end

  # ## a show method that returns the user matching session[:user_id]
  # def show
  #   user = User.find_by!(id: session[:user_id])
  #   render json: user, status: 200
  # end




  # # GET /users
  # def index
  #   @users = User.all

  #   render json: @users
  # end

  # # GET /users/1
  # def show
  #   render json: @user
  # end

  # # POST /users
  # def create
  #   @user = User.new(user_params)
  #   if @user.save
  #     render json: @user, status: :created, location: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password, :password_confirmation, :latitude, :longitude, :address, :ip_address)
    end
end
