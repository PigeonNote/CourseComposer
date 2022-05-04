import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SideNav from './SideNav.jsx';
import Courses from './Courses.jsx';

const mapStateToProps = state => { 
  //redux state
  console.log('state: ', state);
  return {
  // add pertinent state here
    // userId: state.main.userId,
    // nickname: state.main.nickname,
    // city: state.main.city, 
    // stateName: state.main.stateName, 
    // country: state.main.country,
    // currentTemp: state.main.currentTemp, 
    // currentAQI: state.main.currentAQI, 
    // currentWindSpeed: state.main.currentWindSpeed,
    // favorites: [...state.main.favorites]
    courses: [...state.main.courses]
  };
};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  // dispatchSearchLocation: (newSearchLocation) => {
  //   dispatch(actions.searchForLocation(newSearchLocation));
  // }, 
  // dispatchAddFavorite: (location) => {
  //   dispatch(actions.addFavorite(location));
  // }

});

const Dashboard = props => {
  const courseComps = [];

  for (let i = 0; i < props.courses.length; i++) {
    courseComps.push(
      <div className="card">
        <Courses courseName={props.courses[i]} courseID={i} key={i}/>
      </div>
    )
  }
  return (
    <div id="dash">
      <SideNav/>
      <div className="courses">
        {courseComps}
      </div>
    </div>
  );

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);