import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'

const AppFormModal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  const dateFormat = 'dddd, MMMM Do YYYY, h:mm:ss a'
  return(
    <div className={showHideClassName}>
      <b>{props.date.format(dateFormat)}</b>
      <button onClick={props.handleClose}>close</button>
    </div>
  )
}

export default AppFormModal