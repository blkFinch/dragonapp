class RenameClassOnPcharacter < ActiveRecord::Migration[5.1]
  def change
    rename_column :pcharacters, :class, :klass
  end
end
