class UsersController < ApplicationController

  def index
    @users = User.all 
  end

  def new
    @user = User.new 
  end

  def create
    @user = User.new(user_params)
    @users = User.all 
    @user.permission = 1;
    if @user.save
      flash[:success] = 'Welcome to Dragon Binder!'
      redirect_to @user
    else
      redirect_to root_path 
      flash[:error] = 'Failed to create account :<' 
    end
  end



  private

    def user_params
      params.require(:user).permit(:screen_name, :password, :password_confirmation,
                                    :permission)
    end
  
end
