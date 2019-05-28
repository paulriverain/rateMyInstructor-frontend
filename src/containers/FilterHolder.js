import React, { Fragment, Component } from 'react';
import FilterForm from '../components/FilterForm';
import SortDrop from '../components/SortDrop';

class FilterHolder extends Component {

  render(){
    const filterForm = <FilterForm handleSearch={this.props.handleSearch} term={this.props.term}/>
    const sortDrop  = <SortDrop />


    return (
      <div className="FilterContainer" >
        <div className = "FilterFormHolder">
            <h2>Filter Reviews</h2>
            {filterForm}
            {sortDrop}


          </div>
      </div>
    );
  }
}
export default FilterHolder;
