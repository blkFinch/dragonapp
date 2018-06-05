class Post < ApplicationRecord
  belongs_to :user
  belongs_to :campaign

  validates :title, presence: true
  validates :user_id, presence: true
  validates :campaign_id, presence: true
end
