# Preview all emails at http://localhost:3000/rails/mailers/dragon_mailer
class DragonMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/dragon_mailer/new_character_notification
  def new_character_notification
    DragonMailerMailer.new_character_notification
  end

end
