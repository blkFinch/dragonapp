class PcharactersController < ApplicationController

  def index
    @campaign = Campaign.find(params[:campaign_id])
    @characters = @campaign.pcharacters.all
  end

  def new
    @campaign = Campaign.find(params[:campaign_id])
  end

  def create
    @campaign = Campaign.find(params[:campaign_id])
    @user = current_user
    @character = @campaign.pcharacters.create(character_params.merge(user: @user))
    @character.image = params[:pcharacter][:image]
    if @character.save 
      flash[:success]="chacter saved!"
      redirect_to campaign_path(@campaign)
    else
      flash_error(@character)
    end
  end

  def destroy
    @campaign = current_user.pcharacters.find(params[:id]).campaign
    @character = @campaign.pcharacters.find(params[:id])

    @character.destroy 
    redirect_to campaign_path(@campaign)
  end

  private 
    def character_params
      params.require(:pcharacter).permit(:name)
    end

end
