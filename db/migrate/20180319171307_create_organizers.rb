class CreateOrganizers < ActiveRecord::Migration[5.1]
  def change
    create_table :organizers do |t|
      t.integer :user_id
      t.integer :campaign_id
      t.boolean :dm

      t.timestamps
    end
  end
end
