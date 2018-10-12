import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component{

  render(){
    return(
      <form>
        <div className='form-inline'>
          <input name='title' className='form-control' placeholder="Appointment Title"
            value={this.props.title}
            onChange={this.props.onUserInput} />
          <input name='appt_time' className='form-control' placeholder="Date/Time"
            value={this.props.appt_time}
            onChange={this.props.onUserInput} />
          <button type='button' className="btn btn-primary" onClick={this.props.handleSubmit}>Make Appointment</button>
        </div>
      </form>
    )
  }
}

export default AppointmentForm