class Campaign < ApplicationRecord
  has_many :organizers
  has_many :users, :through => :organizers
  has_many :pcharacters 

  validates :title, presence: true, 
                    uniqueness: true

  validates :description, presence: true 
end
