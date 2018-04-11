class OrganizersController < ApplicationController
  def destroy
    @user = User.find(params[:id])
    @campaign = Campaign.find(params[:campaign_id])

    @campaign.organizers.destroy(user_id: @user.id)

    redirect_to campaign_path(@campaign)
end
