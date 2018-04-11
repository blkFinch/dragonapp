class AddPaperclipToPcharacters < ActiveRecord::Migration[5.1]
  def change
    add_attachment :pcharacters, :image
  end
end
