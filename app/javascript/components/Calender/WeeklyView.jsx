import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'


class WeeklyView extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      today: moment(),
      appointments: this.props.appointments,
      campaign_id: this.props.campaign_id
    };
  }

  renderHeader(){
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
      let hour = moment().hour(i);
      hours.push(
        <tr>
          <th scope="row">{moment(hour).format('hA')}</th>
          {this.renderCells()}
        </tr>
      )
    }

    return hours
  }

  renderCells(){
    const cells = []

    for(let i = 0; i < 7; i++){
      cells.push(
        this.cell(i)
      )
    }

    return cells
  }

  cell(day){
    return(
      <td>
      </td>
    )
  }

  renderAppointments(){
  
  }
  
  render(){

    return(
      <div>
        {/* {this.renderAppointments()} */}
        {this.renderHeader()}
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