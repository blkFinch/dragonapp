require 'rails_helper'

RSpec.describe Pcharacter, type: :model do
  it{ should belong_to(:user) } 
end
