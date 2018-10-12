class AppointmentsController < ApplicationController

  def index
    @campaign = Campaign.find(params[:campaign_id])
    @appointments = @campaign.appointments.order('appt_time ASC')
  end

  def create
    @campaign = Campaign.find(params[:campaign_id])
    @appointment = @campaign.appointments.create(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    render json: @appointment
    @appointment.destroy
  end

private
  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
