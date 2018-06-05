class PostsController < ApplicationController

  def index
    @campaign = Campaign.find(params[:campaign_id])

  end

  def new
    @campaign = Campaign.find(params[:campaign_id])
  end

end
