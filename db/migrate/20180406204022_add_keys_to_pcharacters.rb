class AddKeysToPcharacters < ActiveRecord::Migration[5.1]
  def change
    remove_column :pcharacters, :user_id
    remove_column :pcharacters, :campaign_id

    add_reference :pcharacters, :user, foreign_key: true
    add_reference :pcharacters, :campaign, foreign_key: true
  end
end
