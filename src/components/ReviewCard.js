import React, { Component } from 'react';

class ReviewCard extends Component {
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

  render(){
    // console.log("PROPS IN THE REVIEW CONTAINER", this.props)
    // console.log(this.props.review.instructor.first_name)
    const revs = this.props.review

    // console.log(this.sanitizeDate)
    return (
      <div className="ReviewCard">

        <div className="reviewInfo">

        </div>


        <h3><i>Instructor Name:</i></h3>
        <h2>{revs.instructor.first_name} {revs.instructor.last_name} </h2>
        <p><i>Date:</i>  {this.sanitizeDate(revs.updated_at)}</p>
        <h4><i>Rating:</i> {revs.rating}</h4>
        <h5><i>Description:</i>  {revs.comment}</h5>
        <h4><i>Student:</i>  {revs.student.first_name} {revs.student.last_name}  </h4>
        <p>{revs.instructor.bootcamp_name}</p>
        </div>
    );
  }
}
export default ReviewCard;