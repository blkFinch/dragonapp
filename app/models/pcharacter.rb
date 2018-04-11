class Pcharacter < ApplicationRecord
  belongs_to :user 
  belongs_to :campaign

  has_attached_file :image, styles:{ small: "64x64", 
                                    medium:"400x400",
                                    sheet: "450x800",
                                    large: "800x800" }

  validates_attachment_content_type :image, :content_type => ["image/jpg", 
                                     "image/jpeg", "image/png", "image/gif"]


  validates :user, presence: true 
  validates :campaign, presence: true 
end
