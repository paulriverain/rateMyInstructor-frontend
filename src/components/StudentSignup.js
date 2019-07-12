import React, { Component, Fragment } from 'react';


class StudentSignup extends Component {

  state = {
    first_name: "",
    last_name: "",
    password: "",
    error: "",
    buttonHit: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleShowForm = () => {
    this.setState({buttonHit: !this.state.buttonHit})
  }

  createNewStudent = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_FOR_FETCH}/api/v1/students`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(signUp => {
      if (signUp.error) {
        alert("A student with the same last and first name already exists!")
      }
      else {
        alert("Your new account has been created!")
      }
    })
    .then(this.setState({
      first_name: "",
      last_name: "",
      password: ""
    }))
  }

  render(){
    return (
      <div className="SigningHolder">


      {this.state.buttonHit ?

      <Fragment>
        <h2><b>Create Account</b></h2>
        <form className="ui form" onSubmit={this.createNewStudent}>
          <h3><b>Create First Name:</b><br />   <input type="text"  placeholder="New First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/></h3>
          <h3><b>Create Last Name:</b><br />  <input type="text"  placeholder="New Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/></h3>
          <h3><b>Create Password:</b><br />   <input type="password"  placeholder="New Password" name="password" value={this.state.password} onChange={this.handleChange}/></h3><br />
          <input className="ui primary button" type="submit" value="Submit"/>
        </form>
        </Fragment>
        :
        <button className="ui button" onClick={this.handleShowForm}>Create Account</button>
      }

      </div>
    );
  }
}
export default StudentSignup;
