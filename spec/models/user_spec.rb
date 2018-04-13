require 'rails_helper'

RSpec.describe User, type: :model do 

  it { should validate_presence_of(:screen_name) }
  it { should validate_uniqueness_of(:screen_name)}

  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }

  it { should validate_presence_of(:password) }
  it{ should have_secure_password}

  it{ should have_many(:campaigns).through(:organizers)}

  it{ should have_many(:pcharacters) }

end