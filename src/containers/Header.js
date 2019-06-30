import React, { Component } from 'react';

class Header extends Component {



  render(){
    const studName = this.props.signedIn
    return (
      <div className="HeaderContainer" >
        <h1><b><i>Rate My Instructor</i></b></h1><br />
          { studName ?
            <div>
              <h2><i>Welcome {studName.first_name} {studName.last_name}</i></h2><br />
            </div> : null
          }
      </div>
    );
  }
}
export default Header;
