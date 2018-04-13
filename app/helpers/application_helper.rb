module ApplicationHelper

  def log_in(user = nil)
    if(user)
      session[:user_id] = user.id
    end
  end

  def has_character?(campaign_id)
    current_user.pcharacters.where(campaign_id: campaign_id).present?
  end
  
end
