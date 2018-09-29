import React from "react"
import PropTypes from "prop-types"

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      campaigns: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewCampaign = this.addNewCampaign.bind(this)

    this.handleDelete = this.handleDelete.bind(this)
    this.deleteCampaign = this.deleteCampaign.bind(this)

    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateCampaign = this.updateCampaign.bind(this)
  }

  componentDidMount(){
     $.getJSON('/campaigns.json', (response) => {
      this.setState({ campaigns: response })
    });
  }

  handleUpdate(campaign){
    fetch(`/campaigns/${campaign.id}`,{
      method: 'PUT',
      body: JSON.stringify({campaign: campaign}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((response) => { this.updateCampaign(campaign) })
  }

  updateCampaign(campaign){
     let newCampaigns = this.state.campaigns.filter((f) => f.id !== campaign.id)
    newCampaigns.push(campaign)
    this.setState({
      fruits: newCampaigns
    })
  }

  handleDelete(id){
    fetch(`/campaigns/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deleteCampaign(id)
    })
  }

  deleteCampaign(id){
    this.setState({
      campaigns: this.state.campaigns.filter((campaign) => campaign.id !== id )
    })
  }
  handleFormSubmit(title, description){
    let body = JSON.stringify({campaign:
      {title: title, description: description}
    })

    fetch('/campaigns',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => {return response.json()})
    .then((campaign)=>{
      this.addNewCampaign(campaign)
    })
  }

  addNewCampaign(campaign){
    // this.setState({
    //   campaigns: this.state.campaigns.concat(campaign)
    // })
  }

  render(){
    return(
      <div>
        <div class="col-sm-4">
          <div class='small_box'>
            <NewCampaign handleFormSubmit ={this.handleFormSubmit}/>
          </div>
        </div>

        <div class="col-sm-8">
          <div>
            <AllCampaigns campaigns={this.state.campaigns}
              handleDelete = {this.handleDelete}
              handleUpdate={this.handleUpdate}/>
          </div>
        </div>
      </div>
    );
  }


}

const AllCampaigns = (props) => {

  var campaigns = props.campaigns.map( (campaign) => {
    return(
      <div key={campaign.id}>
        <Campaign campaign={campaign}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}/>
      </div>);
  })

  return(
      <div>
        {campaigns}
      </div>
    );
}

class Campaign extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let title = this.title.value
      let description = this.description.value
      let id = this.props.campaign.id
      let campaign = {id: id, title: title, description: description}
      this.props.handleUpdate(campaign)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let title = this.state.editable ? <input type='text' ref=
      {input => this.title = input} defaultValue={this.props.campaign.title} />:
      <h4>{this.props.campaign.title}</h4>
    let description = this.state.editable ? <input type='text' ref=
    {input => this.description = input} defaultValue={this.props.campaign.description} />:
      <p>{this.props.campaign.description}</p>
    return(
      <div class='feed_item'>
        {title}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() =>
          this.props.handleDelete(this.props.campaign.id)}>Delete</button>
      </div>);
  }
}

const NewCampaign = (props) => {
  let formFields = {}

  return(
    <form onSubmit={
      (e) =>{
        props.handleFormSubmit(formFields.title.value, formFields.description.value);
        e.target.reset();
      }
    }>
      <input ref={input =>formFields.title = input}
      placeholder='New Campaign Title' /><br/>
      <input ref={input => formFields.description = input}
      placeholder='Description' /><br/>
      <button>Submit</button>
    </form>
  );
}

class Campaigns extends React.Component {

  render () {
    return (
      <div>
        <h3>
          Active Campaigns:
        </h3>
        <Body />
      </div>

    );
  }
}

export default Campaigns