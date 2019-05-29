import React, { Component } from 'react';

import StudentSignin from '../components/StudentSignin'
import StudentSignup from '../components/StudentSignup'

class SignInUpHolder extends Component {

  render(){
    // console.log(this.props);
    const signIn = <StudentSignin />
    const signUp = <StudentSignup/>


    return (
      <div className="SignHolder" >
        <h3><i>Sign In</i></h3>
        {this.props.signedIn == null ? signIn : ""}
        {this.props.signedIn == null ? signUp : ""}

      </div>
    );
  }
}
export default SignInUpHolder;
