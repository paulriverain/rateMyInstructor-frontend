import React, { Component } from 'react';



class EditReview extends Component {

  state = {
    review: {
      instructor_id: this.props.review.instructor_id,
      student_id: this.props.signedIn.id,
      comment: this.props.review.comment,
      rating: this.props.review.rating
    },
  }



  sanitizeDate = (string) => {
    // console.log(string.slice(5,7))
    let month_number = parseInt(string.slice(5,7), 10)
    let year = string.slice(0,4)
    let date = parseInt(string.slice(8,10), 10)
    let month_name;
    if (month_number === 1) {
      month_name = "January"
    }
    else if (month_number === 2) {
      month_name = "February"
    }
    else if (month_number === 3) {
      month_name = "March"
    }
    else if (month_number === 4) {
      month_name = "April"
    }
    else if (month_number === 5) {
      month_name = "May"
    }
    else if (month_number === 6) {
      month_name = "June"
    }
    else if (month_number === 7) {
      month_name = "July"
    }
    else if (month_number === 8) {
      month_name = "August"
    }
    else if (month_number === 9) {
      month_name = "September"
    }
    else if (month_number === 10) {
      month_name = "October"
    }
    else if (month_number === 11) {
      month_name = "November"
    }
    else if (month_number === 12) {
      month_name = "December"
    }
    return `${month_name} ${date}, ${year}`
  };




  handleChange = (e) => {
    e.persist();
    // console.log(e.target.name);
    this.setState(prevState => ({
      review: {
        ...prevState.review,
        [e.target.name]: e.target.value
      }
    }))
  }


  submitHandler = (e) =>{
    e.preventDefault()
    console.log(e);
    fetch(`http://localhost:3000/api/v1/reviews/${this.props.review.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state.review)
    })
    .then(resp=>resp.json())
    .then(console.log)
    // .then(this.setState(prevState => ({
    // //   ...prevState,
    //   review: {
    //       instructor_id: this.props.review.instructor_id,
    //       student_id: this.props.signedIn.id,
    //       comment: this.props.review.comment,
    //       rating: this.props.review.rating
    //   }
    // })))
  }





  render(){
    console.log("THIS is a thing we want::::", this.props.review)
    const revs = this.props.review
    const me = this.props.signedIn
    // console.log(this.sanitizeDate)
    return (
      <div className="EditReview">
          <form onSubmit={this.submitHandler} >
            <h3><i>Instructor Name:</i></h3>
            <h2>{revs.instructor.first_name} {revs.instructor.last_name} </h2>
            <p><i>Date:</i>  {this.sanitizeDate(revs.updated_at)}</p>
            <p>Rating: <input type="number" min="1" max='5' placeholder="#" name="rating" value={this.state.review.rating} onChange={this.handleChange}/></p>
            <p>Description: <textarea  placeholder="description" name="comment" value={this.state.review.comment} onChange={this.handleChange}/></p>
            <p><input type="submit" value="Submit"/></p>
          </form>
        <p>{me ? (me.id === revs.student_id ? <button value="editBtn" onClick={this.props.handleClick}>Back to Review</button> : null) : null}</p>
        </div>
    );
  }
}
export default EditReview;
