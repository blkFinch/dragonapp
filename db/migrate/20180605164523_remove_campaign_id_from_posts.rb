class RemoveCampaignIdFromPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :campaign_id
  end
end
