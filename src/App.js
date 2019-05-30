import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <MainContainer/>
        </div>
      </Router>
    );
  }
}
export default withRouter(App);
