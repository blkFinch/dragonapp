class CampaignsController < ApplicationController
  before_action :logged_in_user

  def index 
  end

  def new
    @campaign = Campaign.new
  end

  def create

    @campaign = Campaign.new(campaign_params) 

    if @campaign.save 
      current_user.organizers.create(campaign_id: @campaign.id, dm: true)
      flash[:success] = 'Campaign created!'
      redirect_to @campaign
    else
      flash_error(@campaign)
      render :new
    end
  end


  def show
    @campaign = Campaign.find(params[:id])
  end

  def edit
  end

  def update
    @campaign = Campaign.find(params[:id])
  end

  private 
    def campaign_params
      params.require(:campaign).permit(:title, :description)
    end

end
