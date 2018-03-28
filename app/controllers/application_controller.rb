class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
  
  helper_method :is_admin?

  def flash_error(x)
    flash[:danger] = "Action Failed #{x.errors.full_messages}"
  end

  private

    def logged_in_user
      unless logged_in?
        flash[:danger]  = "Please log in!"
        redirect_to login_url
      end
    end

    def is_admin?
      if current_user
        current_user.permission == 3
      else
        return false 
      end
    end

    
end
