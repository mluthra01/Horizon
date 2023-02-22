class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']
  before_action :require_logged_out, only: [:create]
  # skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end


# optionsSignUpForm = {
#     method: 'POST',
#     headers: { 'Content-Type': 'application/json' },
#     body: JSON.stringify({ 
#       email: 'howare@gmail.com', 
#       name: 'hitesh',
#       password: 'mynameishitesh',
#     })
# }