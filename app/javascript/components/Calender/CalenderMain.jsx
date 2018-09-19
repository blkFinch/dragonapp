import React from "react"
import Proptypes from "prop-types"
import Appointments from "./Appointments"

class CalenderMain extends React.Component{

  constructor(props){
    super(props);
    this.state= { appointments: this.props.appointments};
  }

  render(){
    return(
      <div>
        <Appointments appointments={this.state.appointments} />
      </div>
      );
  }
}

export default CalenderMain