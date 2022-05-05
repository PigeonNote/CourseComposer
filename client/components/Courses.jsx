import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {useNavigate} from 'react-router-dom';

const mapStateToProps = state => {
    return {
        courses: state.course.courseList,
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchStoreCourse: (courseData) => {
        dispatch(actions.storeCourse(courseData))
      }

});

  
const Courses = (props) =>  {
    const navigate = useNavigate();


    const startCourse = (course) => {
        console.log('course: ', course);
        props.dispatchStoreCourse(course)
        navigate('/coursepage');
    } 

    return (
        <div className='course' onClick={() => startCourse(props.courseID)} >
            <ul className='course-list'>
                <h3 className="course-title">{`${props.courseName}`}</h3>
                <p className="description">{`${props.info}`}</p>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);