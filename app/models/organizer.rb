class Organizer < ApplicationRecord
  belongs_to :user
  belongs_to :campaign

  scope :owned, ->{where(dm: true)}

  
end
