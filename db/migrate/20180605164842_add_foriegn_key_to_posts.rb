class AddForiegnKeyToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :campaign_id, :bigint
    add_foreign_key :posts, :campaigns
  end
end
