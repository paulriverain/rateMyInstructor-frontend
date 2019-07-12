import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';


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
    fetch(`${process.env.REACT_APP_API_FOR_FETCH}/api/v1/instructors`)
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
    // this.props.rerendersCards(this.state.review)///-====-

    fetch(`${process.env.REACT_APP_API_FOR_FETCH}/api/v1/reviews`,{
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
      // this.setState({reviews: [...reviews, this.state.review]})
  }

  render(){
    return (


      <div className="CreateReviewForm" >
      <form onSubmit={this.submitHandler} >

        <select className="ui dropdown"  name="instructor_id" onChange={this.handleChange}>
          <option value="">Instructors...</option>
          {this.state.instructors.sort( (a,b) => (a.last_name > b.last_name) ? 1 : -1).map( instructor => {
            return <option key={instructor.id} value={instructor.id}>{instructor.last_name}, {instructor.first_name}</option>
          })}
        </select> <br /><br />


          <h3>Rating: <input type="number" min="1" max='5' placeholder="#" name="rating" value={this.state.review.rating} onChange={this.handleChange}/></h3><br />

          <h3>Description:<br /> <textarea  placeholder="Description" name="comment" value={this.state.review.comment} onChange={this.handleChange}/></h3><br />

          <p><input className="ui primary button" type="submit" value="Submit"/></p><br />
        </form>

      </div>
  );

  }
}
export default CreateReviewForm;//withRouter(CreateReviewForm);
