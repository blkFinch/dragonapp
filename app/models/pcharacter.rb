class Pcharacter < ApplicationRecord
  belongs_to :user 
  belongs_to :campaign

  has_attached_file :image, styles:{ small: "64x64", 
                                    medium:"400x400",
                                    sheet: "450x800",
                                    large: "800x800" }

  validates_attachment_content_type :image, :content_type => ["image/jpg", 
                                     "image/jpeg", "image/png", "image/gif"]


  validates_presence_of :user, :campaign, :name, 
                        :dnd_race, :dnd_class

  validates_numericality_of :str, :dex, :con, 
                            :wis, :int, :cha,  
                            less_than: 25, greater_than: 0
end
