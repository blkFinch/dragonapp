class AppointmentsController < ApplicationController
  def index
    @campaign = Campaign.find(params[:campaign_id])
    @appointment = Appointment.new
    @appointments = Appointment.order('appt_time ASC')
  end

  def create
    @campaign = Campaign.find(params[:campaign_id])
    @appointment = @campaign.appointments.create(appointment_params)
    @appointments = Appointment.order('appt_time ASC')
  end

private
  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
