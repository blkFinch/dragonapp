import React from "react"
import PropTypes from "prop-types"

class AllUsers extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      users: []
    };
  }

    componentDidMount(){
     $.getJSON('/users.json', (response) => { this.setState({ users: response }) });
  }
  render(){
    var users = this.state.users.map( (user) => {
      return(
        <div key={user.id}>
          <b>{user.screen_name}</b>
          <p>{user.email}</p>
        </div>);
    })

    return(
        <div>
          {users}
        </div>
      );
  }
}

class UserCrud extends React.Component {

  render () {
    return (
      <div>
        <h3>
          User List:
        </h3>
        <AllUsers />
      </div>

    );
  }
}

export default UserCrud
