require "rails_helper"

RSpec.describe DragonMailer, type: :mailer do
  describe "new_character_notification" do
    let(:mail) { DragonMailer.new_character_notification }

    it "renders the headers" do
      expect(mail.subject).to eq("New character notification")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
