import React, { Component } from 'react';
import SideNav from './SideNav.jsx';
import { Link } from 'react-router-dom';

class CreateCourse extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div id='dash'>
          <SideNav/>
        </div>
        <form id='create'>
          <input type='text' placeholder='Title'></input>
          <br></br>
          <input type='text' placeholder='Description'></input>
          <br></br>
          <Link className="createCourseButton" to={'/coursePage'}>
            <button>Create Course</button>
          </Link>
          <br></br>
          <Link className="cancelButton" to={'/dashboard'}>
            <button> CANCEL! </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateCourse;