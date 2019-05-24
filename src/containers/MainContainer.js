import React, { Component } from 'react';

class MainContainer extends Component {

  state = {
    students: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/students')
    .then(res=> res.json())
    .then(console.log)

  }


  render(){
    return (
      <div className="MainContainer">
        <h1>Yo Hello Bro</h1>
      </div>
    );
  }
}
export default MainContainer;
