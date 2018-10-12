import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'

class Appointment extends React.Component{
  render(){
    return(
            <li className="list-group-item">
              <b>{this.props.appointment.title}</b>
              <br />
              <em>{moment(this.props.appointment.appt_time).format('llll')}</em>
              <br />
              <button type="button" className="btn btn-danger btn-sm"
               onClick={() =>
               this.props.handleDelete(this.props.appointment.id)}>Cancel</button> 
            </li>
            )
  }
}

export default Appointment
