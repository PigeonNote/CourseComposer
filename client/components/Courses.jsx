import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {useNavigate} from 'react-router-dom';

const mapStateToProps = state => {
    return {
    courses: state.course.courseList,
    }
};

const mapDispatchToProps = dispatch => ({

});

  
const Courses = (props) =>  {
    const navigate = useNavigate();

    const startCourse = (e) => {
        console.log(e);
        navigate('/coursepage');
    } 

    return (
        <div className='course' onClick={startCourse}>
            <ul>
                <h3 className="course-title">{`${props.courseName}`}</h3>
                <p className="description">{`${props.info}`}</p>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);