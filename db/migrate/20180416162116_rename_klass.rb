class RenameKlass < ActiveRecord::Migration[5.1]
  def change
    rename_column :pcharacters, :klass, :dnd_class 
  end
end
