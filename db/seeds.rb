# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(screen_name:"finch", password:"finchpass", 
			password_confirmation:"finchpass", permission: 3)

User.create(screen_name:"scout", password:"password", 
			password_confirmation:"password", permission: 1)

User.create(screen_name:"user", password:"password", 
			password_confirmation:"password", permission: 1)