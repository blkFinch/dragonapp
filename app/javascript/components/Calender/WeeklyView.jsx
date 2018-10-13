import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'


class WeeklyView extends React.Component{

  renderHeader(){
    return(
      <h3>
        Week
      </h3>
    )
  }
  renderDays(){
    const dateFormat = "dddd"
    const days = [];

    for( let i = 0; i < 7; i++){
      let day = moment().day(i);
      days.push(
        <th scope='col' key={i}>
          {moment(day).format(dateFormat)}
        </th>
      );
    }

    return(
        <tr className="days-row"><th scope='col'></th>{days}</tr>
    )
  }
  renderSlots(){
    // allow user to set hours of operation for calender view??
    // hour is in 24 format
    const hourOpen = 7
    const hourClose = 18
    const hours = [];

    for( let i =hourOpen; i <= hourClose; i++){
      let hour = moment().hour(i);
      hours.push(
        <tr>
          <th scope="row">{moment(hour).format('hA')}</th>
        </tr>
      )
    }

    return(
      <div>{hours}</div>
    )
  }
  
  render(){
    return(
      <div>
        {this.renderHeader()}
        <table className="table table-bordered">
          <thead className="thead-light">
            {this.renderDays()}
          </thead>
          {this.renderSlots()}
        </table>
      </div>
    );
  }
}

export default WeeklyView