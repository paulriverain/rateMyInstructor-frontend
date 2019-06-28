import React, { Component } from 'react'

class SortDrop extends Component {

  render() {
    return(
      <div>
        <h4>Select the following: </h4>
        <select onChange={this.props.selectSort}>
          <option>Sort By...</option>
          <option value="1">Inst. First Name</option>
          <option value="2">Inst. Last Name</option>
          <option value="3">Stud. First Name</option>
          <option value="4">Stud. Last Name</option>
          <option value="5">Rating: High-Low</option>
          <option value="6">Rating: Low-High</option>
        </select>
        
      </div>
    )
  }
}

export default SortDrop
