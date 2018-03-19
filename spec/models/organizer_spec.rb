require 'rails_helper'

RSpec.describe Organizer, type: :model do
  it{ should belong_to(:user) }
  it{ should belong_to(:campaign) }


end
