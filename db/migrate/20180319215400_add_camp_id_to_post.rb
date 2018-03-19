class AddCampIdToPost < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :campaign_id, :integer
  end
end
