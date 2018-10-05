import React from "react"
import Proptypes from "prop-types"
import Appointments from "./Appointments"
import AppointmentForm from "./AppointmentForm"

class CalenderMain extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      appointments: this.props.appointments,
      title: '',
      appt_time: '',
      campaign_id: this.props.campaign_id
    };

    this.onUserInput = this.onUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
  }

  onUserInput(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){

   // gets token from top of page
   var token = document.getElementsByName('csrf-token')[0].content

   let body = JSON.stringify({appointment:
      {
        title: this.state.title,
        appt_time: this.state.appt_time,
        campaign_id: this.state.campaign_id
      }
    })

    fetch(`/campaigns/${this.state.campaign_id}/appointments.json`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: body
    }).then(
      (response) => { return response.json() }
    ).then(
      (appointment) => { this.addNewAppointment(appointment) }
    );
  }

  // TODO: research React Addons Update
  addNewAppointment(appointment){
    console.log("new appointemnt added!");
    // var appointments = React.addons.update(this.state.appointments, { $push: [appointments]});
  }

  render(){
    return(
      <div>
        <AppointmentForm
          title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={this.onUserInput}
          handleSubmit={this.handleSubmit} />
        <Appointments appointments={this.state.appointments} />
      </div>
      );
  }
}

export default CalenderMain