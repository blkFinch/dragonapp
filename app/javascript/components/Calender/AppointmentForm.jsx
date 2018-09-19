import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      appt_time: '',
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

   // gets token from top of page
   var token = document.getElementsByName('csrf-token')[0].content

   let body = JSON.stringify({appointment:
      {
        title: this.state.title,
        appt_time: this.state.appt_time,
        campaign_id: this.state.campaign_id
      }
    })

    fetch(`/campaigns/${this.state.campaign_id}/appointments/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: body
    });
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