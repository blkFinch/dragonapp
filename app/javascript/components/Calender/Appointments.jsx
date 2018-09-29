import React from "react"
import PropTypes from "prop-types"
import Appointment from "./Appointment"

class Appointments extends React.Component {

  render () {
    return (
      <ul class="list-group">
        {this.props.appointments.map(function(appointment){
          return(
            <Appointment appointment={appointment} />
            )
        })}
      </ul>
    );
  }
}

export default Appointments
