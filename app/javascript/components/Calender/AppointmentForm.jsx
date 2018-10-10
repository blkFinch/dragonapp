import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component{

  render(){
    return(
      <form >
        <input name='title' placeholder="Appointment Title"
          value={this.props.title}
          onChange={this.props.onUserInput} />
        <input name='appt_time' placeholder="Date/Time"
          value={this.props.appt_time}
          onChange={this.props.onUserInput} />
        <button type='button' className="btn btn-primary" onClick={this.props.handleSubmit}>Make Appointment</button>
      </form>
      )
  }
}

export default AppointmentForm