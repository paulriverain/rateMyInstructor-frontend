import React, { Component, Fragment } from 'react';
import ReviewContainer from './ReviewContainer'
import Header from './Header'
import FilterHolder from './FilterHolder'
import SignInUpHolder from './SignInUpHolder';
import { Route, withRouter } from 'react-router-dom';
import 'semantic-ui/dist/semantic.min.css';


class MainContainer extends Component {

//===============================================
//=================Handles State=================
  state = {
    reviews: [],
    term: "",
    sortNumber: 0,
    bootCamp: "",
    currentStudent: null,
    renderState: false
  }

  //===============================================
  //=================Fetch API=================
  componentDidMount(){
    //Fetches for all the reviews
    fetch('http://localhost:3000/api/v1/reviews')
    .then(res=> res.json())
    .then(reviews => this.setState({reviews: reviews}))
    //Fetches for the token
    const token = localStorage.getItem('token')
    if(token) {
      fetch('http://localhost:3000/api/v1/current_user', {
        headers: {
          Authenticate: token
        }
      })
      .then(resp => resp.json())
      .then(student => {
        if (!student.error) {
          this.setState({currentStudent: student})
        }
      })
    }
  }

  //===============================================
  //=================Helper Functions==============

  //Form that filters based on instructors name
  handleInstrSearch = (e) => {
    // console.log(e.target.value)
    this.setState({term: e.target.value})
  }

  //Select that Sorts based on users selection
  handleSort = (e) =>{
    this.setState({sortNumber: e.target.value})
  }

  //Filters based on BootCamp Selection
  handleBoot = (e) =>{
    this.setState({bootCamp: e.target.value})
  }
  //login button, takes current student info as arg
  handleLogin = (loginInfo) =>{
    console.log("LOGIN INFO IS", loginInfo)
    localStorage.setItem("token", loginInfo.token)
    this.setState({currentStudent: loginInfo})
    this.props.history.push("/")
  }
  //logout button, resets currentStudent to nill
  handleLogoutClick = ()=>{
    localStorage.removeItem("token")
    this.setState({currentStudent: null})
    this.props.history.push("/")
  }

  handleSendHome = () =>{
    this.props.history.push("/")
  }

  getToLogin = () => {
    this.props.history.push("/login")
  }

  handleRerenderHome = (review) => {
    // debugger
    this.setState({reviews: [review, ...this.state.reviews]})
  }

  handleEditRerenderHome = (editedReview) => {
    // if (editedReview){}
    const editReviewList = this.state.reviews.map( review => {
      // debugger
      if (review.id !== parseInt(editedReview.id)) {
        return review
      }
      else {
        // debugger
        return editedReview
      }
    })
    this.setState({reviews: editReviewList})
  }

handleDelete = (thisReview) =>{
  this.setState({reviews: this.state.reviews.filter((review) => review !== thisReview)})
}


handleFormClear=()=>{
  console.log("hit main");
  this.setState({sortNumber: 0})
  this.setState({bootCamp: ''})
  this.setState({term: ''})
}


  //===============================================
  //=================Filter/Sort Function Helpers=======

  //long hand way to sort through cards based on selected imput
  displayReviews = () => {
    // console.log(this.state.reviews)
     const filteredReviews = this.state.reviews.filter( review => {
       return review.instructor.first_name.toLowerCase().includes(this.state.term.toLowerCase()) || review.instructor.last_name.toLowerCase().includes(this.state.term.toLowerCase())
     })
     if (this.state.sortNumber === "1") {
       return filteredReviews.sort( (a,b) => (a.instructor.first_name > b.instructor.first_name) ? 1 : -1)
     }
     else if (this.state.sortNumber === "2") {
       return filteredReviews.sort( (a,b) => (a.instructor.last_name > b.instructor.last_name) ? 1 : -1)
     }
     else if (this.state.sortNumber === "3") {
       return filteredReviews.sort( (a,b) => (a.student.first_name > b.student.first_name) ? 1 : -1)
     }
     else if (this.state.sortNumber === "4") {
       return filteredReviews.sort( (a,b) => (a.student.last_name > b.student.last_name) ? 1 : -1)
     }
     else if (this.state.sortNumber === "5") {
       return filteredReviews.sort( (a,b) => (a.rating > b.rating) ? -1 : 1)
     }
     else if (this.state.sortNumber === "6") {
       return filteredReviews.sort( (a,b) => (a.rating > b.rating) ? 1 : -1)
     }
     else {
       return filteredReviews
     }
   }


   //===============================================
   //=================Render All that good good======

  render(){
    console.log(this.state.currentStudent);
    const currStud = this.state.currentStudent
    return (

      <div>
        <Header signedIn={currStud}/>
        <div className="MainContainer">

        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

          <Route exact path="/" render={ () => {

            return (
              <Fragment>

                <div className="barshifter">
                  <FilterHolder clearForm={this.handleFormClear} handleInstrSearch={this.handleInstrSearch} term={this.state.term} selectSort={this.handleSort} selectBootCamp={this.handleBoot}/><br />

                  {this.state.currentStudent ?
                    <div className="SignHolder"><p><button type='button' onClick={this.handleLogoutClick} name="logoutBtn"><h3>LOG OUT</h3></button></p></div>
                    : <div className="SignHolder"><p><button type='button' onClick={this.getToLogin} name="signInBtn"><h3>LOG IN</h3></button></p></div>
                  }
                </div>
                <ReviewContainer reviews={this.displayReviews().filter( review => this.state.bootCamp === review.instructor.bootcamp_name || this.state.bootCamp === "")} editRerendersCards={this.handleEditRerenderHome} rerendersCards={this.handleRerenderHome} deleteCards={this.handleDelete} signedIn={currStud}/>


              </Fragment>
            )
          }}/>

          <Route exact path="/login" render={ () => {
            return <SignInUpHolder sendHome={this.handleSendHome}signedIn={currStud} onLogin={this.handleLogin} onLogout={this.handleLogoutClick}/>
          }}/>

          </div>
      </div>
    );
  }
}
export default withRouter(MainContainer);
