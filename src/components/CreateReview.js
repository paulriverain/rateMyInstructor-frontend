import React, { Component } from 'react';
import CreateReviewForm from './CreateReviewForm'

class CreateReview extends Component {
  state ={
    reviewForm: false
  }


handleCreateClick =()=>{
  this.setState({reviewForm: !this.state.reviewForm})
}

  // const reviewForm = <ReviewForm />
  render(){

    const studName = this.props.signedIn
    return (
      <div className="CreateReview" >
          { studName ?
            <div className="WriteRev">
              <p><button onClick={this.handleCreateClick}><h3>Create a Review</h3></button></p>
              {this.state.reviewForm ? <CreateReviewForm studName={this.props.signedIn} /> : null}
            </div>
            : null
          }
      </div>
    );
  }
}
export default CreateReview;
