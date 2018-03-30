# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'factory_bot_rails'

User.create(screen_name:"finch", email:"finch@email.com", password:"finchpass", 
            password_confirmation:"finchpass", permission: 3)

User.create(screen_name:"scout", email:"scouty@email.com", password:"password", 
			password_confirmation:"password", permission: 1)

User.create(screen_name:"user", email:"user@user.com", password:"password", 
			password_confirmation:"password", permission: 1)

10.times do 
  FactoryBot.create(:user)
end