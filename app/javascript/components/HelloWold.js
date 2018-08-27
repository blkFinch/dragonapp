import React from "react"
import PropTypes from "prop-types"
class HelloWold extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWold.propTypes = {
  greeting: PropTypes.string
};
export default HelloWold
