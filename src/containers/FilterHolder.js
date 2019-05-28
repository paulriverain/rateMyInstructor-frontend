import React, { Fragment, Component } from 'react';
import FilterForm from '../components/FilterForm'


class FilterHolder extends Component {

  render(){
    const filterForm = <FilterForm/>
    return (
      <div className="FilterContainer" >

          {filterForm}

      </div>
    );
  }
}
export default FilterHolder;
