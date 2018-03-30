require 'faker'

FactoryBot.define do 
  factory :user do 
    screen_name { Faker::Zelda.character }
    email { Faker::Internet.email }
    permission { 1 }
    password { "password" }
    password_confirmation { "password" }
  end
end
