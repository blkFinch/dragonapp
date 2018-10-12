import React from "react"
import PropTypes from "prop-types"
import Appointment from "./Appointment"

const Appointments = (props) => {

  var appointments = props.appointments.map( (appointment) => { 
    return(
      <Appointment 
      appointment={appointment} 
      key={appointment.id} 
      handleDelete={props.handleDelete} />
    );
  })

  return (
      <ul className="list-group">
        {appointments}
      </ul>
  );
}

export default Appointments
