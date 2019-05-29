import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'
import Header from './Header'
import FilterHolder from './FilterHolder'
import SignInUpHolder from './SignInUpHolder';



class MainContainer extends Component {

//===============================================
//=================Handles State=================
  state = {
    reviews: [],
    term: "",
    sortNumber: 0,
    bootCamp: "",
    currentStudent: null
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
  }
  //logout button, resets currentStudent to nill
  handleLogoutClick = ()=>{
    localStorage.removeItem("token")
    this.setState({currentStudent: null})
  }




  //===============================================
  //=================Filter/Sort Function Helpers=======

  //long hand way to sort through cards based on selected imput
  displayReviews = () => {
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
    console.log("MAIN CONTAINER, WHAT IS CURRENT USER?", this.state)
    const currStud = this.state.currentStudent
    return (
      <div className="MainContainer">
        <Header signedIn={currStud}/>

        <FilterHolder handleInstrSearch={this.handleInstrSearch} term={this.state.term} selectSort={this.handleSort} selectBootCamp={this.handleBoot}/>

        <ReviewContainer
          reviews={
            this.displayReviews().filter( review => this.state.bootCamp === review.instructor.bootcamp_name || this.state.bootCamp === "")
          } signedIn={currStud}/>

          <SignInUpHolder signedIn={currStud} onLogin={this.handleLogin} onLogout={this.handleLogoutClick}/>
      </div>
    );
  }
}
export default MainContainer;
