import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

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
  return (
    <h1>COURSE DASHBOARD</h1>
  )

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);