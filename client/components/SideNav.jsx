import React, { Component } from 'react';
import { Link, Navigate} from 'react-router-dom';

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
        {/* <a href="#section">
          <button>Create Course</button>
        </a> */}
        <br></br>
        <br></br>
        <Link className="loginPageButton" to={'/create'}>
          <button>Create Course</button>
        </Link>
        </a>
      </div>     
    );
  }
}

export default SideNav;