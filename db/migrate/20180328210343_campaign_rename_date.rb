class CampaignRenameDate < ActiveRecord::Migration[5.1]
  def change
    rename_column :campaigns, :date, :next_meeting
  end
end
