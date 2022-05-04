// import actionType constants
import * as types from '../constants/actionTypes';

// export const addCardActionCreator = marketId => {
//   return { type: types.ADD_CARD, payload: marketId }
// };

// // add more action creators
// export const deleteCardActionCreator = marketId => {
//   return { type: types.DELETE_CARD, payload: marketId }
// };
export const storeUserData = userID => ({
  type: types.STORE_USERINFO, 
  payload: userID
});

// change payload to ???
export const addCourse = newCourse => {
  return { type: types.ADD_COURSE, payload: newCourse }
};

export const deleteCourse = newLocation => {
  return { type: types.DELETE_COURSE, payload: newLocation }
};

export const addLesson = newLocation => {
  return { type: types.ADD_LESSON, payload: newLocation }
};

export const deleteLesson = newLocation => {
  return { type: types.DELETE_LESSON, payload: newLocation }
};

export const getCourses = courseData => {
  return { type: types.GET_COURSES, payload: courseData}
};