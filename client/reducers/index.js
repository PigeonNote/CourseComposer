/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import courseReducer from './courseReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  course: courseReducer,
});

// make the combined reducers available for import
export default reducers;