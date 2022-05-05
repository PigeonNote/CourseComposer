import React, { Component, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link, Navigate} from 'react-router-dom';
import SideNav from './SideNav.jsx';

const mapStateToProps = state => {
    return {
        courses: state.course.courseList,
        courseID: state.course.courseID,
        lessons: state.course.lessons,
        lessonID: state.course.lessonID
    }
};
const mapDispatchToProps = dispatch => ({
    dispatchGetLessons: (lessonData) => {
        dispatch(actions.getLessons(lessonData))
      },
    dispatchStoreLesson: (lesson) => {
    dispatch(actions.storeLesson(lesson))
    }
});


const CoursePage = props => {
  // ARRAY OF ALL LESSONS
  
  //fetch here...
  useEffect( () => {
    

    console.log('props.courseID: ', props.courseID);

    const linkFront = 'http://localhost:3000/slide/';
    const linkBack = `${props.courseID}`;
    const link = linkFront + linkBack;
  
    const fetchdata = async () => {
      const response = await fetch(link,{
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
          // console.log('COURSEPAGE FETCH DATA: ',data)
          props.dispatchGetLessons(data);
          props.dispatchStoreLesson(0);
        //   layoutRef= useRef({});
        //   layoutRef.current = props.lessons;
          // props.dispatchGetCourses(data)
          return;
        })
    };
    fetchdata();
  },[])

//   console.log('TESTING', props.lessons);
//   console.log('sara testing', layoutRef);
 
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
      {/* SLIDE DISPLAY */}
      <div className='slideView'>
        {/* {props.lessons[props.lessonID].video}; */}
      </div>
      
      
    </div>
    

  );
  
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
