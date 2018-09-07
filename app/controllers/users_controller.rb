class UsersController < ApplicationController
  before_action :logged_in_user, only: [:edit, :update, :show, :index]

  def index
    @users = User.all
    if params[:search]
      @users = User.search(params[:search])
    end
    respond_to do |format|
      format.html
      format.json {
        render json: @users
      }
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html
      format.json {
        render json: @user
      }
    end
  end

  def create
    @user = User.new(user_params)
    @users = User.all
    @user.permission = 1;
    if @user.save
      flash[:success] = 'Welcome to Dragon Binder!'
      DragonMailer.with(user: @user).welcome_email.deliver_now
      log_in @user
      redirect_to user_path(@user)
    else
      flash_error(@user)
      render action: "new"
    end
    respond_to do |format|
      format.html
      format.json {
        render json: @user
      }
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = "Profile Updated!"
      redirect_to @user
    else
      flash[:danger] = "Failed to create account :< #{@user.errors.full_messages}"
      render 'edit'
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_url
  end



  private

    def user_params
      allowed = [:screen_name, :password, :password_confirmation,
                                    :email]

      if is_admin?
       allowed << :permission
      end
      params.require(:user).permit(allowed)
    end

end
