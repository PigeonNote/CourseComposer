import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link, Navigate} from 'react-router-dom';
import SideNav from './SideNav.jsx';

class CoursePage extends Component {
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
          <input type='text' placeholder='Lesson Name'></input>
          <br></br>
          <input type='text' placeholder='Embedd Video'></input>
          <br></br>
        </form>
        <div id='vid'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3pXelEAXuPo" 
            title="YouTube video player" frameborder="0" allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
          <br>
          </br>
          <textarea
            // rows="5"
            // cols="35"
            width="560px" height="315px"
            placeholder="Enter Notes here"
            id="notes-value"
          />
        </div>
        
        
      </div>
      

    );
  }
};

export default CoursePage;