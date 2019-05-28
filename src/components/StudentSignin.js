import React, { Component } from 'react';


class StudentSignin extends Component {


  render(){

    return (
      <div className="SigningHolder">
        <form>
          User Name: <input type="text"  placeholder="user name"/>
          Password: <input type="text"  placeholder="password"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default StudentSignin;
