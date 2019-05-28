import React, { Component } from 'react';


class BootFilter extends Component {


  render(){

    return (
      <div className="BootFilter" >
        <p> Select BootCamp:
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
        </p>
      </div>
    );
  }
}
export default BootFilter;
