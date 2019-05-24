import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'

class MainContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/reviews')
    .then(res=> res.json())
    .then(reviews => this.setState({reviews: reviews}))
  }


  render(){
    return (
      <div className="MainContainer">
        <ReviewContainer reviews={this.state.reviews}/>
      </div>
    );
  }
}
export default MainContainer;
