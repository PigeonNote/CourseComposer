import React, { useEffect } from 'react';
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
    userID: state.course.userID,
    courses: state.course.courseList,
    totalCourses: state.course.totalCourses,
    totalLessons: state.course.totalLessons

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
  dispatchGetCourses: (courseData) => {
    dispatch(actions.getCourses(courseData))
  }

});

const Dashboard = props => {
  
  useEffect(() => {

    console.log('OUTSIDE EFFECT PROPS IS:', props);

    const linkFront = 'http://localhost:3000/course/';

    const link = linkFront + props.userID;

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
          props.dispatchGetCourses(data)
          return;
        })
      
    };
    fetchdata();

  }, [])


  const courseComps = [];
  console.log('allcourses:', props)

  for (let i = 0; i < props.courses.length; i++) {
    courseComps.push(
        <Courses courseName={props.courses[i].title} info={props.courses[i].info} courseID={i} key={i}/>
    )
  }
  console.log('courses are:', courseComps)
  return (
    <div id="content">
      <div id="dash">
      <SideNav/>
      </div>
      <div id="dashboard">
        <div className="courses">
          {courseComps}
        </div>
      </div>
    
    </div>
  );

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// useEffect(() => {

//   // console.log('PROPS IS:', props);

//   // const linkFront = 'http://localhost:3000/course/';

//   // const link = link + props.userID;

//   // fetch(concat,{
//   // method: 'POST',
//   // credentials: 'include',
//   // headers: {
//   //   'Content-Type': 'application/json'
//   // },
//   //   body: JSON.stringify(username)
//   // })
//   // .then(response => response.json())
//   // .then(data => console.log('data: ', data))
// },[])