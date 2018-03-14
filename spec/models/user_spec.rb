require 'rails_helper'

RSpec.describe User, type: :model do 

  it { should validate_presence_of(:screen_name) }
  it { should validate_presence_of(:password) }

end