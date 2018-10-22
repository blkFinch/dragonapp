import React from "react"
import PropTypes from "prop-types"
import Datetime from "react-datetime"

class AppointmentForm extends React.Component{

  render(){

    var inputProps ={
      name: 'appt_time'
    }
    return(
      <form>
        <div className='form-inline'>
          <input name='title' className='form-control' placeholder="Appointment Title"
            value={this.props.title}
            onChange={this.props.onUserInput} />
  
          <Datetime 
            inputProps={inputProps} 
            value={this.props.appt_time}
            onChange={this.props.setApptTime}
          />
          <button type='button' className="btn btn-primary" onClick={this.props.handleSubmit}>Make Appointment</button>
        </div>
      </form>
    )
  }
}

export default AppointmentForm