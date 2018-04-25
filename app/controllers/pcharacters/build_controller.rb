class Pcharacters::BuildController < ApplicationController
  include Wicked::Wizard

  steps :step_one, :step_two, :step_three

  def show
    @character = Pcharacter.find(params[:pcharacter_id])
    render_wizard
  end

  def update
    @character = Pcharacter.find(params[:pcharacter_id])
    params[:pcharacter][:status] = 'active' if step == steps.last
    @character.update_attributes(params[:pcharacter])
    render_wizard @character 
  end

  def create 
    @charcter = Pcharacter.create 
    redirect_to wizard_path( steps.first, pcharacter_id: @character.id )
  end
end