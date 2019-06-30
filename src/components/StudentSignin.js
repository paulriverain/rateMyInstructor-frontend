import React, { Component, Fragment } from 'react';
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
    console.log(this.props);
    // this.props.history.push("/")
  }

// console.log(this.state)
  render(){
    console.log("PROPS THAT WE ARE INTERESTED IN", this.props)
    return (
      <Fragment>
      <div className="SigningHolder">
      <h2><b>Login</b></h2>
        <form className="ui form" onSubmit={this.handlesLoginFetch}>
          <h3><b>First Name:</b>  [ type: New ]<br />  <input type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/></h3>
          <h3><b>Last Name:</b>  [ type: User ]<br />  <input type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/></h3>
          <h3><b>Password:</b> [ type: 123 ]<br /> <input type="password"  placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/></h3><br />
          <input className="ui primary button" type="submit" value="Submit"/>
        </form>
        <br />
        <h3> --  --  --  OR  --  --  --</h3>
      </div>

      </Fragment>
    );
  }
}
export default StudentSignin;
// export default withRouter(StudentSignin);
