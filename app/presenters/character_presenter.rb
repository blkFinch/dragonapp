module Wizard
  module Pcharacter
    STEPS = %w(step1 step2 step3).freeze 

    class Base
      include ActiveModel::Model 
      attr_accesor :pcharacter 

      delegate *::Pcharacter.attribute_names.map{ 
        |attr| [attr, "#{attr}="]
        }.flatten, to: :user

      def initialize(user_attributes)
        @user = ::User.new(user_attributes)
      end
    end

    class Step1 < Base 
      validates_presence_of :user, :campaign, :name 
    end

    class Step2 < Step1
      validates_presence_of :dnd_class, :dnd_race
    end

    class Step3 < Step2
      validates_numericality_of :str, :dex, :con, 
                            :wis, :int, :cha,  
                            less_than: 25, greater_than: 0
    end
  end
end