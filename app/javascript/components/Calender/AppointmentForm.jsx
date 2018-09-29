import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component{

  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input name='title' placeholder="Appointment Title"
          value={this.props.title}
          onChange={this.props.onUserInput} />
        <input name='appt_time' placeholder="Date/Time"
          value={this.props.appt_time}
          onChange={this.props.onUserInput} />
        <input type='submit' value="Make Appointment" />
      </form>
      )
  }
}

export default AppointmentForm