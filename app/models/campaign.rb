class Campaign < ApplicationRecord
  has_many :organizers
  has_many :users, :through => :organizers

  validates :title, presence: true, 
                    uniqueness: true

  validates :description, presence: true 
end
