require 'rails_helper'

RSpec.describe Campaign, type: :model do
  
  it{ should validate_presence_of(:title) }
  it{ should validate_uniqueness_of(:title) }
  it{ should validate_presence_of(:description) }

  it{ should have_many(:users).through(:organizers) }

  

end
