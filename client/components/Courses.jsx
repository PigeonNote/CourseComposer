import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => {
    console.log('state: ', state);
    return {
        courseId: state.main.courseID,
        lessons: state.main.lessons
    }
};

const mapDispatchToProps = dispatch => ({

});


const Courses = (props) => {

    return (
        <div className='course'>
            <ul>
                <li className="course-title"></li>
                <li className="description"></li>
                <li className="progress"></li>
            </ul>



        </div>
    )
}

export default Courses;