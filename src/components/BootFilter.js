import React, { Component } from 'react';


class BootFilter extends Component {


  render(){

    return (
      <div className="BootFilter" >
        <h4> Select BootCamp: </h4>
          <select onChange={this.props.selectBootCamp}>
            <option value="">BootCamps...</option>
            <option value="Flatiron School">Flatiron School</option>
            <option value="Fullstack Academy">Fullstack Academy</option>
            <option value="Thinkful">Thinkful</option>
            <option value="Grace Hopper">Grace Hopper</option>
            <option value="Hack Reactor">Hack Reactor</option>
            <option value="Metis">Metis</option>
            <option value="Byte Academy">Byte Academy</option>
            <option value="App Academy">App Academy</option>
            <option value="Startup Institute">Startup Institute</option>
          </select>

      </div>
    );
  }
}
export default BootFilter;
