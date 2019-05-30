import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard'
import CreateReview from '../components/CreateReview'

class ReviewContainer extends Component {



  render(){
    console.log("PROPS IN THE REVIEW CONTAINER", this.props)
    const renderReviews = this.props.reviews.map( review => {
      return <ReviewCard review={review} key={review.id} signedIn={this.props.signedIn}/>
    })
    const createReview = <CreateReview rerendersCards={this.props.rerendersCards} signedIn={this.props.signedIn} />
    return (
      <div className="ui eight column grid">
        <div className="ReviewContainer" >
          <h2>Review List</h2>
          {createReview}
          {renderReviews}
        </div>
      </div>
    );
  }
}
export default ReviewContainer;
