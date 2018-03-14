class User < ApplicationRecord


  validates :screen_name, presence: true, length: { maximum: 30 },
                          uniqueness: true

  has_secure_password
  validates :password, presence: true, length: { minimum: 5 }
end
