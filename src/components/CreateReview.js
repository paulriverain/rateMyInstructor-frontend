import React, { Component } from 'react';
import CreateReviewForm from './CreateReviewForm'
import { withRouter } from 'react-router-dom';


class CreateReview extends Component {
  state ={
    reviewForm: false
  }


handleCreateClick =()=>{
  this.setState({reviewForm: !this.state.reviewForm})
}

  render(){
    const studName = this.props.signedIn
    return (
      <div className="CreateReview" >
          { studName ?
            <div className="WriteRev">
            <br />
              <button className="ui primary button" onClick={this.handleCreateClick}>{this.state.reviewForm?
                <h3>Hide Review Form</h3> : <h3>Create a Review</h3>}</button>
              <br /><br />
              {this.state.reviewForm ? <CreateReviewForm rerendersCards={this.props.rerendersCards} studName={this.props.signedIn} /> : null}
            </div>
            : null
          }
      </div>
    );
  }
}
export default withRouter(CreateReview);
