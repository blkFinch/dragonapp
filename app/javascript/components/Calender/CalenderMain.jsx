import React from "react"
import Proptypes from "prop-types"
import WeeklyView from "./WeeklyView"
import Appointments from "./Appointments"
import AppointmentForm from "./AppointmentForm"
import update from 'immutability-helper'


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
    this.handleDelete = this.handleDelete.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
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

  handleDelete(id){
    console.log('handle delete hit');

    var token = document.getElementsByName('csrf-token')[0].content

    fetch(`/campaigns/${this.state.campaign_id}/appointments/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      }
    }).then(
      this.deleteAppointment(id)
    )
  }

  deleteAppointment(id){
    this.setState({
      appointments: this.state.appointments.filter((appointment) => appointment.id !== id )
    })
  }

  // TODO: research React Addons Update
  addNewAppointment(appointment){
    console.log("new appointemnt added!");
    var appointments = update(this.state.appointments, { $push: [appointment]});
    
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render(){
    return(
      <div className='container-fluid'>
        <div className="row">
          <div className='col-sm-8'>
            <AppointmentForm
              title={this.state.title}
              appt_time={this.state.appt_time}
              onUserInput={this.onUserInput}
              handleSubmit={this.handleSubmit} />
            <Appointments 
              appointments={this.state.appointments}
              handleDelete={this.handleDelete} />
          </div>
        </div>
        <WeeklyView />
      </div>
      );
  }
}

export default CalenderMain