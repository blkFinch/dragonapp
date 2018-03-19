class User < ApplicationRecord

  has_many :organizers
  has_many :campaigns, :through => :organizers

  validates :screen_name, presence: true, length: { maximum: 30 },
                          uniqueness: true

  has_secure_password
  validates :password, presence: true, length: { minimum: 5 }
end
