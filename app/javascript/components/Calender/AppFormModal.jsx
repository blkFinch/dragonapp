import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import AppointmentForm from "./AppointmentForm"

const AppFormModal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  const dateFormat = 'dddd, MMMM Do YYYY, h:mm:ss a'
  return(
    <div className={showHideClassName}>
      <b>{props.date.format(dateFormat)}</b>
      <button onClick={props.handleClose}>close</button>
      <AppointmentForm
              title={props.title}
              appt_time={props.date}
              onUserInput={props.onUserInput}
              handleSubmit={props.handleSubmit}
              setApptTime={props.date} />
    </div>
  )
}

export default AppFormModal