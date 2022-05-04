import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link, Navigate} from 'react-router-dom';
import SideNav from './SideNav.jsx';

class CreateLesson extends Component {
  constructor() {
    super();

  }

  // onsubmit event handler 

  render() {
    return(
      <div>
        <div id='dash'>
          <SideNav/>
        </div>
        <form id='create'>
          <input type='text' placeholder='Title'></input>
          <br></br>
          <input type='text' placeholder='Embedd Video'></input>
          <br></br>
          <textarea type='text' placeholder='Notes'></textarea>
          <br></br>
          <button>Add Lesson Slide</button>
          <br></br>
          <Link class='cancelButton' to={'/dashboard'}>
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateLesson;