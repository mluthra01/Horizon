class Api::SessionsController < ApplicationController

    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]
    # skip_before_action :verify_authenticity_token

  def show
    @user = current_user
    if @user
        render 'api/users/show'
    else
        render json: { user: nil }
    end
  end
    

  def create
    # debugger
    @user = User.find_by_credentials(params[:email], params[:password])
      if @user
        login!(@user)
        render 'api/users/show'
      else
        render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
      end
  end

# THIS IS FORM THE LECTURE
  # def create
  #   email = params[:email]
  #   password = params[:password]
  #   @user = User.find_by_credentials(email, password)

  #     if @user 
  #       login!(@user)
  #       render 'api/users/show'
  #     else
  #       render json: { errors: ['The provided credentials were invalid.'] }, status: 422
  #     end

  # end

  def destroy
    logout!
    render json: { message: 'success' }
    # head :no_content # other way of handling this
  end
end
