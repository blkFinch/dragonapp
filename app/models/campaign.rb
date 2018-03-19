class Campaign < ApplicationRecord
  has_many :organizers
  has_many :users, :through => :organizers
end
