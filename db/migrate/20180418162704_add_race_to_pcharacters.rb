class AddRaceToPcharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :pcharacters, :dnd_race, :integer
  end
end
