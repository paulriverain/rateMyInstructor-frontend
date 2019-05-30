import React, { Fragment, Component } from 'react';
import SearchFilter from '../components/SearchFilter'
import SortFilter from '../components/SortFilter'
import BootFilter from '../components/BootFilter'

class SortingAndFilteringContainer extends Component {

  render(){
    // console.log("PROPS IN THE REVIEW CONTAINER", this.props)

    return (
      <div className="ui eight column grid" color="red">
        <div className="SortingAndFilteringContainer" >
          <SearchFilter handleSearch={this.props.handleSearch} term={this.props.term}/>
          <SortFilter selectSort={this.props.selectSort}/>
          <BootFilter selectBootCamp={this.props.selectBootCamp}/>
        </div>
      </div>
    );
  }
}
export default SortingAndFilteringContainer;
