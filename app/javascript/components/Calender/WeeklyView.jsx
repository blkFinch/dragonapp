import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import AppFormModal from './AppFormModal'
import Appointment from "./Appointment";


class WeeklyView extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      modal: false,
      dateSelected: moment(),
      today: moment(),
      appointments: this.props.appointments,
      campaign_id: this.props.campaign_id,
      _moment: moment().startOf('week')
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onClickCell = this.onClickCell.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  logToConsole(){
    console.log("this  is a test function");
  }

  onClickCell(date){
    this.setDate(date);
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
        {this.logToConsole()}
       
        {this.renderHeader()}

        <AppFormModal show={this.state.modal} handleClose={this.hideModal} date={this.state.dateSelected} />

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
