class DragonMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.dragon_mailer.new_character_notification.subject
  #
  def new_character_notification
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  def welcome_to_campaign
    @user = params[:user]
    @campaign = params[:campaign]
    mail(to: @user.email, subject: "Welcome to a New Campaign!")
  end

  def welcome_email
    @user = params[:user]
    mail(to: @user.email, subject:"Welcome to DragonBinder!!")
  end

end
