class Addforeignkeytoposts < ActiveRecord::Migration[5.1]
  def change
    add_reference :posts, :campaign, index: true
    add_foreign_key :posts, :campaigns
  end
end
