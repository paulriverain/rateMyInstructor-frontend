import React, { Component } from 'react';

class CreateReviewForm extends Component {
  state = {
    review: {
      instructor_id: null,
      student_id: this.props.studName.id,
      comment: "",
      rating: 0
    },
    instructors: []
  }



  componentDidMount() {
    fetch('http://localhost:3000/api/v1/instructors')
    .then(res => res.json())
    .then(allInstructors => this.setState({instructors: allInstructors}))
  }

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      review: {
        ...prevState.review,
        [e.target.name]: e.target.value
      }
    }))
  }


  submitHandler = (e) =>{
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/reviews',{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state.review)
    })
    .then(resp => resp.json())
    .then(review => this.props.rerendersCards(review))
    .then(this.setState(prevState => ({
      ...prevState,
      review: {
        instructor_id: null,
        student_id: this.props.studName.id,
        comment: "",
        rating: 0
      }
    })))
    // debugger
  }

  render(){
    return (
      <div className="CreateReviewForm" >
      <form onSubmit={this.submitHandler} >
        <select name="instructor_id" onChange={this.handleChange}>
          <option value="">Instructors...</option>
          {this.state.instructors.sort( (a,b) => (a.last_name > b.last_name) ? 1 : -1).map( instructor => {
            return <option key={instructor.id} value={instructor.id}>{instructor.last_name}, {instructor.first_name}</option>
          })}
        </select> <br />


          <p>Rating: <input type="number" min="1" max='5' placeholder="#" name="rating" value={this.state.review.rating} onChange={this.handleChange}/></p>
          <p>Description: <textarea  placeholder="description" name="comment" value={this.state.review.comment} onChange={this.handleChange}/></p>
          <p><input type="submit" value="Submit"/></p>
        </form>

      </div>
    );
  }
}
export default CreateReviewForm;
