class User < ApplicationRecord

  has_many :organizers
  has_many :campaigns, :through => :organizers
  has_many :pcharacters
  has_many :posts

  validates :screen_name, presence: true, length: { maximum: 30 },
                          uniqueness: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255},
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: {case_sensitive: false }

  has_secure_password
  validates :password, presence: true, length: { minimum: 5 }

  def self.search(search)
    where("screen_name LIKE ? ","%#{search}%")
  end
end
