module CampaignsHelper
  def link_to_character_create(campaign)
    if !has_character?(@campaign)
        "<div class='small_box'>
          <a data-toggle='modal' 
          data-target='#new_character_modal'>
          Create a New Character!
          </button>
        </div>".html_safe
    end
  end

  def link_to_character_image(character)
    if character.image.present?
      "<img src='#{character.image(:small)}'/>".html_safe
    end
  end
  
  def link_to_character_controls(character)
    if owns_character?(character)
      link_to 'delete', character, method: :delete
    end
  end

private 

  def owns_character?(character)
    current_user.id == character.user_id
  end

  def has_character?(campaign_id)
    current_user.pcharacters.where(campaign_id: campaign_id).present?
  end

end
