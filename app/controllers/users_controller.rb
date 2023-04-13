class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]


####! copied from my project4 
  def create
    user = User.create!(signup_user_params)
    session[:user_id] = user.id
    session[:ip_address] = user.ip_address
    render json: user, status: :created
  end


  # potentially write a method for auto-caching the ip_address


  ## a show method that returns the user matching session[:user_id]
  def show
    user = User.find_by!(id: session[:user_id])
    render json: user, status: 200
  end




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
      params.require(:user).permit(:username, :password_digest, :latitude, :longitude, :address)
    end
end
