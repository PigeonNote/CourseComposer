import React, { Component } from 'react';

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <a href="#section">
          <button>Dashboard</button>
          </a>
        <br></br>
        <br></br>
        <a href="#section">
          <button>Account</button>
        </a>
        <a href="#section">
          <button>Create Course</button>
        </a>
      </div>     
    );
  }
}

export default SideNav;