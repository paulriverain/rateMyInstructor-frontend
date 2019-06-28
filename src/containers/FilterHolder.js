import React, { Component } from 'react';
import FilterForm from '../components/FilterForm';
import SortDrop from '../components/SortDrop';
import BootFilter from '../components/BootFilter';


class FilterHolder extends Component {

//====================================
//=======Holds Filter Actions=========

  render(){
    const filterForm = <FilterForm handleInstrSearch={this.props.handleInstrSearch} term={this.props.term}/>
    const sortDrop  = <SortDrop selectSort={this.props.selectSort}/>
    const bootFilter = <BootFilter selectBootCamp={this.props.selectBootCamp}/>

    return (
      <div className="FilterContainer" >
        <div className = "FilterFormHolder">
            <h2>Filter Reviews</h2>
            <br />
            {filterForm}
            <br />
            {sortDrop}
            <br />
            {bootFilter}
            <br />
          </div>
      </div>
    );
  }
}
export default FilterHolder;
