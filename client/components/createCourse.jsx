import React, { Component } from 'react';
import SideNav from './SideNav.jsx';
import { Link } from 'react-router-dom';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => { 
  //redux state
  console.log('state: ', state);
  return {
  // add pertinent state here
    userId: state.course.userId
  };
};
const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  dispatchAddCourse: (newCourse) => {
    console.log('we hit that wea are here');
    dispatch(actions.addCourse(newCourse));
  } 
});

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    console.log('state INSIDE COMPONENT: ', this.state);
    console.log('props INSIDE COMPONENT: ', this.props);
  }

  onSubmit(e) {
    e.preventDefault();
    let fetchStatus;
    const title = document.getElementById('title').value;
    const info = document.getElementById('description').value;
    const course = {title, info};
    console.log('this is action: ', course);
    console.log('INSIDE ONSUBMIT, THIS IS THIS.PROPS.USERID ', this.props.userId);
    this.props.dispatchAddCourse(course);
    
    // fetch request
    fetch('http://localhost:3000/course/add', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...course,
        userId: this.props.userId
      })
    })
      .then((response) => {
        console.log('RESPONSE IS:', response);
        fetchStatus = response.status;
        if (fetchStatus === 200) {
          // this.setState({ ...this.state, loggedIn: true });
          return;
        }
      });
  }

  render() {
    return(
      <div>
        <div id='dash'>
          <SideNav/>
        </div>
        <form id='create'>
          <input id='title' type='text' placeholder='CourseName'></input>
          <br></br>
          <input id='description' type='text' placeholder='Description'></input>
          <br></br>
          <></>
          <button onClick={this.onSubmit}>Save Course</button>
          <Link className="createCourseButton" to='/createlesson'>
            <button>Add Lesson</button>
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

//export default CreateCourse;
export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse);
