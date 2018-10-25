import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'

class NewWeeklyView extends React.Component{

  renderHeader(){
    return(
      <div className='row'>
        {this.renderDayNames()}
      </div>
    )
  }

  renderDayNames(){
    const dateFormat = "dddd"
    const days = [];

    for( let i = 0; i < 7; i++){
      let day = moment().day(i);

      days.push(
        <div className='col-md-1' key={'weekly_header_' + i}>
          {moment(day).format(dateFormat)}
          
        </div>
      );
    }

    return(
      <div>
        {days}
      </div>
      
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
        <div className='row' key={hour}>
          {moment(hour).format('hA')}
        </div>
      )
    }

    return(
       <div className='col-md-1'>
       <div className='row'>Hours</div>
       {hours}
       </div>
       )
  }

  
  render(){
    return(
      <div class='container-fluid'>
        {this.renderHours()}
        {this.renderDayNames()}
      </div>
    )
  }
}

export default NewWeeklyView