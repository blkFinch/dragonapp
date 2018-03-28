class SetCampaignDefault < ActiveRecord::Migration[5.1]
  def change
    change_column :organizers, :dm, :boolean, default: false, null: false
  end
end
