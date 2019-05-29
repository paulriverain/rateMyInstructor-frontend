import React, { Component } from 'react';

import StudentSignin from '../components/StudentSignin'
import StudentSignup from '../components/StudentSignup'

class SignInUpHolder extends Component {




  render(){
    // console.log(this.props);
    const signIn = <StudentSignin onLogin={this.props.onLogin}/>
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
export default SignInUpHolder;
