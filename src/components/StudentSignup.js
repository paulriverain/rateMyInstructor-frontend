import React, { Component } from 'react';


class StudentSignup extends Component {

  state = {
    first_name: "",
    last_name: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createNewStudent = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/students", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="SigningHolder">
        <form onSubmit={this.createNewStudent}>
          Create First Name: <input type="text"  placeholder="new first name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
          Create Last Name: <input type="text"  placeholder="new last name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
          Create Password: <input type="password"  placeholder="new password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default StudentSignup;
