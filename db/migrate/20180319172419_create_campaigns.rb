class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title
      t.datetime :date
      t.text :description

      t.timestamps
    end
  end
end
