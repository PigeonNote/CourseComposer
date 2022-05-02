// import actionType constants
import * as types from '../constants/actionTypes';

export const addCardActionCreator = marketId => {
  return { type: types.ADD_CARD, payload: marketId }
};

// add more action creators
export const deleteCardActionCreator = marketId => {
  return { type: types.DELETE_CARD, payload: marketId }
};
// change payload to ???
export const addCourse = newLocation => {
  return { type: types.ADD_COURSE, payload: newLocation }
};

export const deleteCourse = newLocation => {
  return { type: types.DELETE_COURSE, payload: newLocation }
};

export const addLesson = newLocation => {
  return { type: types.add_LESSON, payload: newLocation }
};

export const deleteLesson = newLocation => {
  return { type: types.delete_LESSON, payload: newLocation }
};