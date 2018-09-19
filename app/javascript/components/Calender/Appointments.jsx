import React from "react"
import PropTypes from "prop-types"
import Appointment from "./Appointment"

class Appointments extends React.Component {

  constructor(props){
    super(props);
    this.state= { appointments: this.props.appointments};
  }

  render () {
    return (
      <ul class="list-group">
        {this.state.appointments.map(function(appointment){
          return(
            <Appointment appointment={appointment} />
            )
        })}
      </ul>
    );
  }
}

export default Appointments
