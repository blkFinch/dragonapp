class AddCurrentHpToCharacter < ActiveRecord::Migration[5.1]
  def change
    add_column :pcharacters, :current_hp, :integer 
  end
end
