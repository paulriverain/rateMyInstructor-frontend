import React, { Component } from 'react';


class FilterForm extends Component {


  render(){

    return (
      <div className="FilterHolder" >
        <h4>Instructor's Name: </h4><input type="text" value={this.props.term} onChange={this.props.handleInstrSearch} placeholder="Find by Name"/>
      </div>
    );
  }
}
export default FilterForm;
