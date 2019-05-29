import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'

class StudentSignin extends Component {

  state = {
    first_name: "",
    last_name: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handlesLoginFetch= (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/auth',{
      method: 'POST',
      headers:{
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(loginInfo => {
      if (loginInfo.error) {
        alert(loginInfo.error)
      }
      else {
        this.props.onLogin(loginInfo)
        alert("You have successfully signed in!")
      }
    })
    .then(this.setState({
      first_name: "",
      last_name: "",
      password: ""
    }))

  }

// console.log(this.state)
  render(){
    return (
      <div className="SigningHolder">
        <form onSubmit={this.handlesLoginFetch}>
          First Name: <input type="text" placeholder="first name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br />
          Last Name: <input type="text" placeholder="last name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br />
          Password: <input type="password"  placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default StudentSignin;
// export default withRouter(StudentSignin);
