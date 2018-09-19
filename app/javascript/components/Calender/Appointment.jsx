import React from "react"
import PropTypes from "prop-types"

class Appointment extends React.Component{
  render(){
    return(
            <li class="list-group-item">
              <b>{this.props.appointment.title}</b>
              <br />
              <em>{this.props.appointment.appt_time}</em>
            </li>
            )
  }
}

export default Appointment
