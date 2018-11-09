import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import update from 'immutability-helper'
import AppFormModal from './AppFormModal'
import Appointment from "./Appointment";


class WeeklyView extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      modal: false,
      dateSelected: moment(),
      today: moment(),
      _moment: moment().startOf('week'),
      appointments: this.props.appointments,
      campaign_id: this.props.campaign_id,
      title: '',
      appt_time: ''
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onClickCell = this.onClickCell.bind(this);
    this.setDate = this.setDate.bind(this);

    //appointments form methods
    this.onUserInput = this.onUserInput.bind(this);
    this.setApptTime = this.setApptTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  setApptTime(e){
    console.log(e._d);
    this.setState({'appt_time': e._d});
  }

  onUserInput(e){
    console.log(e);
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

    fetch(`/campaigns/${this.state.campaign_id}/appointments.json`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: body
    }).then(
      (response) => { return response.json() }
    ).then(
      (appointment) => { 
        this.hideModal()
        this.addNewAppointment(appointment) }
    );
  }

  handleDelete(id){
    console.log('handle delete hit');

    var token = document.getElementsByName('csrf-token')[0].content

    fetch(`/campaigns/${this.state.campaign_id}/appointments/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      }
    }).then(
      this.deleteAppointment(id)
    )
  }

  deleteAppointment(id){
    this.setState({
      appointments: this.state.appointments.filter((appointment) => appointment.id !== id )
    })
  }

  // TODO: research React Addons Update
  addNewAppointment(appointment){
    console.log("new appointemnt added!");
    var appointments = update(this.state.appointments, { $push: [appointment]});
    this.setState({ appointments: appointments })
    {this.renderHours()}
  }

  onClickCell(date){
    this.setDate(date);
    this.setState({'appt_time': date._d});
    this.showModal();
  }
  setDate(date){
    this.setState({dateSelected: date});
  }

  showModal(){
    console.log("modal show");
    this.setState({modal: true});
  }

  hideModal(){
    console.log("modal show");
    this.setState({modal: false});
  }

  renderHeader(){
    // const date_f = 'dddd, MMMM Do YYYY, h:mm:ss a'
    return(
      <h3>
        Today is {this.state.today.format('MMM Do')}
      </h3>
    )
  }
  renderDays(){
    const dateFormat = "dddd"
    const days = [];

    for( let i = 0; i < 7; i++){
      let day = moment().day(i);

      if(this.state.today.day() == i ) {
        days.push(
          <th className='table-header-highlight' scope='col' key={i}>
            {moment(day).format(dateFormat)}
          </th>
        );
      } else {
        days.push(
          <th scope='col' key={i}>
            {moment(day).format(dateFormat)}
          </th>
        );
      }
    }

    return(
        <tr className="days-row"><th scope='col'></th>{days}</tr>
    )
  }
  renderHours(){
    // allow user to set hours of operation for calender view??
    // hour is in 24 format
    const hourOpen = 6
    const hourClose = 19
    const hours = [];


    for( let i =hourOpen; i <= hourClose; i++){
      let hour = moment().startOf('week');
      hour.add(i,'hours')
      hours.push(
        <tr>
          <th scope="row">{moment(hour).format('hA')}</th>
          {this.renderCells(hour)}
        </tr>
      )
    }

    return hours
  }
  
  renderCells(hour){
    const cells = []
    
    for(let i = 0; i < 7; i++){
      let _day = moment(hour).add(i, 'days')

      cells.push(
        this.cell(_day)
      )
    }

    return cells
  }

  cell(_day){
    const date_f = 'dddd, MMMM Do YYYY, h:mm:ss a'
    return(
      <td id= {_day.toISOString() } onClick={() => this.onClickCell(_day)}> 
        {this.mapApps(_day.toISOString())} 

      </td>
    )
  }
  
  mapApps(id){
    for(let appointment of this.state.appointments){
      if(moment(appointment.appt_time).toISOString() == id){
        return(
          <p>{appointment.title}</p>
        )
      }
    }
  }

  render(){
    return(
      <div>
        {this.renderHeader()}
        <AppFormModal 
              show={this.state.modal} 
              handleClose={this.hideModal} 
              date={this.state.dateSelected}
              title={this.state.title}
              appt_time={this.state.appt_time}
              onUserInput={this.onUserInput}
              handleSubmit={this.handleSubmit}
              setApptTime={this.setApptTime}/>
        <table className="table table-bordered">
          <thead className="thead-light">
            {this.renderDays()}
          </thead>
          <tbody>
            {this.renderHours()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeeklyView
