class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
  
  helper_method :is_admin?

  private

    def logged_in_user
      unless logged_in?
        flash[:danger]  = "Please log in!"
        redirect_to login_url
      end
    end

    def is_admin?
      current_user.permission == 3
    end

    
end
