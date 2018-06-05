class PostsController < ApplicationController

  def index
    @campaign = Campaign.find(params[:campaign_id])

  end

  def new
    @campaign = Campaign.find(params[:campaign_id])
  end

  def destroy
    @post.destroy
    flash[:success] = "Deleted!"
    redirect_to campaign_path(@campaign)

end
