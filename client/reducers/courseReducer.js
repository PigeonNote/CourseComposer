/* eslint-disable indent */
/**
 * ************************************
 *
 * @module courseReducer
 * @author
 * @date
 * @description reducer for course data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  userID: '',
  totalCourses: 0,
  totalLessons: 0,
  courseList: [],
  lastCourseId: 1,
};

/*
export const STORE_USERINFO = 'STORE_USERINFO';
export const ADD_COURSE = 'ADD_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const ADD_LESSON = 'ADD_LESSON';
export const DELETE_LESSON = 'DELETE_LESSON';
*/

const courseReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.STORE_USERINFO:
      const {userID} = action.payload;
      console.log('payload is:', action.payload)
      return {
        ...state, 
        userID: userID
      };

    case types.GET_COURSES:
      const allCourses = action.payload;
      const courseData = allCourses.slice()
      return {
        ...state, 
        courseList: courseData
      }

    case types.ADD_COURSE:
      const course = {
        courseName: action.payload.title,
        info: action.payload.info,
        courseID: ++state.lastCourseId,
        totalLessons: 0,
        lessons: [] // maybe linked list ?
      };
      const courses = state.courseList.slice();
      courses.push(course);
      console.log('courses: ', courses);
      return {
        ...state, 
        courseList: courses,
        lastCourseId: course.courseID,
        totalCourses: ++state.totalCourses,
      };
  
    case types.DELETE_COURSE: 
      let courseList = state.courseList.slice();
      let { courseID } = action.payload;
      for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].courseID === courseID) {
          courseList.splice(i, 1);
        }
      }
      return {
        ...state,
        courseList,
        totalCourses: --state.totalCourses
        // not sure yet about lastCourseId
      };
    case types.ADD_LESSON:
      const { embedVideo } = action.payload;
      const courseItem = action.payload.courseID;
      courseList = state.courseList.slice();
      let length;
      const lesson = {
        //lessonID: ++length,
        lessonID: 0,
        notesText: '',
        embedVideo: embedVideo
      };
      for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].courseID === courseItem) {
          lesson.lessonID = courseList[i].lessons.length;
          courseList[i].lessons.push(lesson);
        }
      }
      
      return {
        ...state,
        totalLessons: ++state.totalLessons,
        courseList: courseList,
      };

    case types.DELETE_LESSON:
      const { lessonID } = action.payload;
      courseID = action.payload.courseID;
      courseList = state.courseList.slice();
      for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].courseID === courseID) {
          for (let j = 0; j < courseList[i].lessons.length; j++) {
            if (courseList[i].lessons[j] === lessonID) {
              courseList[i].lessons.splice(j,1);
            }
          
          }
        }
      }
      return {
        ...state,
        courseList,
        totalLessons: --state.totalLessons
      };
   
    default: {
      return state;
    }
  }
};

export default courseReducer;
