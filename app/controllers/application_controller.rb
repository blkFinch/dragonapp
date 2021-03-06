require "application_responder"

class ApplicationController < ActionController::Base
  before_action :set_time_zone 
  self.responder = ApplicationResponder
  respond_to :html

  protect_from_forgery with: :exception
  include SessionsHelper
  
  helper_method :is_admin?
  helper_method :is_dm?

  def flash_error(x)
    flash[:danger] = "Action Failed #{x.errors.full_messages}"
  end

  private
    def set_time_zone
      Time.zone = 'Mountain Time (US & Canada)'
    end

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

    def is_dm?(campaign_id)
      current_user.organizers.owned.where(campaign_id: campaign_id ).any?
    end

end
