class CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :logged_in_user
  before_action  :is_owner, only:[:edit]

  def index
    render json: Campaign.all
  end

  def new
    @campaign = Campaign.new
  end

  def create

    @campaign = Campaign.new(campaign_params)

    if @campaign.save
      current_user.organizers.create(campaign_id: @campaign.id, dm: true)
      flash[:success] = 'Campaign created!'
      render :nothing => true
      redirect_to @campaign
    else
      flash_error(@campaign)
      render :new
    end
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy
  end

  def show
    puts("show")
    @campaign = Campaign.find(params[:id])
    @character = Pcharacter.new
  end

  def edit
    @campaign = Campaign.find(params[:id])
  end

  def update
    @campaign = Campaign.find(params[:id])
    @user = User.find(params[:id])
    if @campaign.update_attributes(campaign_params)
      flash[:succes]="Campaign Updated"
      redirect_to edit_campaign_path(@campaign)
    else
      flash[:danger]="failed :<"
      render 'edit'
    end
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

    DragonMailer.with(user: @user, campaign: @campaign).welcome_to_campaign.deliver_now

    @campaign.organizers.create(user_id: @user.id)
  end

  def remove_user
    @campaign = Campaign.find(params[:id])
    @user = User.find(params[:user_id])

    @organizer = @campaign.organizers.where(:user_id => @user.id).first

    @organizer.destroy

    redirect_to edit_campaign_path(@campaign)
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

    def json_request?
      request.format.symbol == :json
    end

end
