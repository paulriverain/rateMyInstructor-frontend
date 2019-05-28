import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard'

class ReviewContainer extends Component {

  render(){
    // console.log("PROPS IN THE REVIEW CONTAINER", this.props)
    const renderReviews = this.props.reviews.map( review => {
      return <ReviewCard review={review} key={review.id}/>
    })

    return (
      <div className="ui eight column grid">
        <div className="ReviewContainer" >
          <h2>Review List</h2>
          {renderReviews}
        </div>
      </div>
    );
  }
}
export default ReviewContainer;
