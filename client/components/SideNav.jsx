import React, { Component } from 'react';

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <a href="#section">Account</a>
        <br></br>
        <br></br>
        <a href="#section">
          <button>Create Course</button>
        </a>
      </div>     
    );
  }
}

export default SideNav;