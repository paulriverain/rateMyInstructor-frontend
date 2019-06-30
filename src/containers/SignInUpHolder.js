import React, { Component, Fragment } from 'react';

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
        <Fragment>
      <div className='homeish'>
        <button className='ui button' onClick={this.props.sendHome} name="logoutBtn"><h3>Home Page</h3></button>
      </div>

      <div className="SignFormHolder" >
      { !this.props.signedIn ?
        <Fragment>


          <div>
            <h1><i>Sign In</i></h1>
            {signIn}
            {signUp}
            <br /><br />
          </div>
        </Fragment>
          :
        <p><button type='button' onClick={this.sendHome}><h3>LOG OUT</h3></button></p>

      }<br />
    </div>
      </Fragment>
    );
  }
}
export default withRouter(SignInUpHolder);
