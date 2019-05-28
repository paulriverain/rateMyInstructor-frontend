import React, { Component } from 'react'

class SortDrop extends Component {

  render() {
    return(
      <div>
        <label> Please choose to sort with one of the following options: </label>
        <select onChange={this.props.selectSort}>
          <option>Please Select An Option</option>
          <option value="1">Instructor First Name</option>
          <option value="2">Instructor Last Name</option>
          <option value="3">Student First Name</option>
          <option value="4">Student Last Name</option>
          <option value="5">Rating: Highest to Lowest</option>
          <option value="6">Rating: Lowest to Highest</option>
        </select>
      </div>
    )
  }
}

export default SortDrop
