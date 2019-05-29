import React, { Component } from 'react';

class Header extends Component {



  render(){
    const studName = this.props.signedIn
    return (
      <div className="HeaderContainer" >
        <h1><i>Rate My Instructor</i></h1>
          { studName ?
            <div>
              <h3><i>Welcome {studName.first_name} {studName.last_name}</i></h3>
            </div> : null
          }
      </div>
    );
  }
}
export default Header;
