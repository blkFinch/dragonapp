class AddIdsToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :pcharacters, :user_id, :integer
    add_column :pcharacters, :campaign_id, :integer
  end
end
