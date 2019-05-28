import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'
import Header from './Header'
import FilterHolder from './FilterHolder'


class MainContainer extends Component {

  state = {
    reviews: [],
    term: "",
    sortNumber: 0
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/reviews')
    .then(res=> res.json())
    .then(reviews => this.setState({reviews: reviews}))
  }

  handleSearch = (e) => {
    // console.log(e.target.value)
    this.setState({term: e.target.value})
  }


  render(){
    const filteredReviews = this.state.reviews.filter( review => {
      return review.instructor.first_name.toLowerCase().includes(this.state.term.toLowerCase()) || review.instructor.last_name.toLowerCase().includes(this.state.term.toLowerCase())
    })
    return (
      <div className="MainContainer">
        <Header />
        <FilterHolder handleSearch={this.handleSearch} term={this.state.term} selectSort={this.handleSort}/>
        <ReviewContainer  reviews={filteredReviews}/>
      </div>
    );
  }
}
export default MainContainer;
