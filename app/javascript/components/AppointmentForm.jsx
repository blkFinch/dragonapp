import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Placeholder Title',
      appt_time: 'tommorow at 9am',
      campaign_id: this.props.campaign_id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    var name = e.target.name;
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
   console.log(`submitted!`)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input name='title' placeholder="Appointment Title"
          value={this.state.title}
          onChange={this.handleChange} />
        <input name='appt_time' placeholder="Date/Time"
          value={this.state.appt_time}
          onChange={this.handleChange} />
        <input type='submit' value="Make Appointment" />
      </form>
      )
  }
}

export default AppointmentForm