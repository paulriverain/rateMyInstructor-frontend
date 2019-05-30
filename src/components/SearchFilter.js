import React, { Component } from 'react'

class SearchFilter extends Component {

  render() {
    return (
      <div>
        <label>Search by Instructor Name: </label>
        <input type="text" value={this.props.term} onChange={this.props.handleSearch}/>
      </div>
    )
  }
}

export default SearchFilter
