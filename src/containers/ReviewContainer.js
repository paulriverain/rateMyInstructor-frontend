import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard'
import CreateReview from '../components/CreateReview'
import { withRouter } from 'react-router-dom';


class ReviewContainer extends Component {



  render(){
    console.log("PROPS IN THE REVIEW CONTAINER", this.props)
    const renderReviews = this.props.reviews.map( review => {
      return <ReviewCard editRerendersCards={this.props.editRerendersCards} deleteCards={this.props.deleteCards} review={review} key={review.id} signedIn={this.props.signedIn} rerendersCards={this.props.rerendersCards}/>
    })
    const createReview = <CreateReview rerendersCards={this.props.rerendersCards} signedIn={this.props.signedIn} />
    return (
      <div className="ui eight column grid">
        <div className="ReviewContainer" >
          <h1><u><i>Review List</i></u></h1>
          <br />
          {createReview}

          <div className="CardHolder w3-container w3-center w3-animate-opacity">
            {renderReviews}
          </div>
        </div>
      </div>
    );
  }

}
export default withRouter(ReviewContainer);
