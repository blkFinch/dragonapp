class AddPermissionToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :permission, :integer
  end
end
