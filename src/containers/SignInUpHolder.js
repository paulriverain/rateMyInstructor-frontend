import React, { Component } from 'react';

import StudentSignin from '../components/StudentSignin'
import StudentSignup from '../components/StudentSignup'

import { BrowserRouter as Router, withRouter } from 'react-router-dom'

class SignInUpHolder extends Component {




  render(){
    const signIn =
      <Router>
        <StudentSignin onLogin={this.props.onLogin}/>
      </Router>
    const signUp = <StudentSignup/>


    return (
      <div className="SignHolder" >
      { !this.props.signedIn ?
        (
          <div>
          <h3><i>Sign In</i></h3>
          {signIn}
          {signUp}
          </div>) :
        <p><button type='button' onClick={this.props.onLogout} name="logoutBtn"><h3>LOG OUT</h3></button></p>
      }
      </div>
    );
  }
}
export default withRouter(SignInUpHolder);
