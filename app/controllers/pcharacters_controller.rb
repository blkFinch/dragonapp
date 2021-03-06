class PcharactersController < ApplicationController

  def index
    @campaign = Campaign.find(params[:campaign_id])
    @characters = @campaign.pcharacters.all
  end

  def show
    @campaign = Campaign.find(params[:campaign_id])
    @character = @campaign.pcharacters.find(params[:id])
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
      redirect_to campaign_path(@campaign)
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
      params.require(:pcharacter).permit(:name, :dnd_class, :dnd_race, :str, 
                                          :dex, :con, :int, :wis, :cha)
    end

end
