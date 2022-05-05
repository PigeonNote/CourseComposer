import React, { Component } from 'react';
import { Link, Navigate} from 'react-router-dom';

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Link className="loginPageButton" to={'/dashboard'}>
          <button>dashboard</button>
        </Link>
     
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