class AddCampaignIdToPost < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :campagin_id, :integer
  end
end
