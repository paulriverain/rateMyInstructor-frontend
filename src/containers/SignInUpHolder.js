import React, { Component } from 'react';

import StudentSignin from '../components/StudentSignin'
import StudentSignup from '../components/StudentSignup'

class SignInUpHolder extends Component {

  render(){

    const signIn = <StudentSignin/>
    const signUp = <StudentSignup/>


    return (
      <div className="SignHolder" >
        <h3><i>Sign In</i></h3>
        {signIn}
        {signUp}
      </div>
    );
  }
}
export default SignInUpHolder;
