class Removedoubleid2 < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :campagin_id
  end
end
