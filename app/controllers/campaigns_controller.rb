class CampaignsController < ApplicationController
  before_action :logged_in_user
  before_action  :is_owner, only:[:edit]

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
    @campaign = Campaign.find(params[:id])
  end

  def update
    @campaign = Campaign.find(params[:id])
    @user = User.find(params[:id])
  end

  def search_user
    @campaign = Campaign.find(params[:id])
    @users = User.search(params[:search])
    respond_to do |format| 
      format.js { render template: "users/search"}
    end
  end

  def add_user
    @campaign = Campaign.find(params[:id])
    @user = User.find(params[:user_id])

    @campaign.organizers.create(user_id: @user.id)
  end


  private 
    def campaign_params
      params.require(:campaign).permit(:title, :description)
    end

    def is_owner
      @campaign = Campaign.find(params[:id])
      unless is_dm?(@campaign)
        flash[:danger]="access denied"
        redirect_to campaign_path(@campaign)
      end
    end

end
