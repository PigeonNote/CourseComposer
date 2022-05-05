import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Navigate} from 'react-router-dom';
import * as actions from '../actions/actions';


const mapDispatchToProps = dispatch => ({
  dispatchUsernameStorage: (username) => {
    dispatch(actions.storeUserData(username));
  }
});

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = { username: '', loggedIn: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let fetchStatus;
    //fetch to login
    const signUpInfo = {
      username: event.target.username.value,
      password: event.target.password.value
    };
      
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signUpInfo)
    })
      .then((response) => {
        console.log('RESPONSE IS:', response);
        fetchStatus = response.status;
        if (fetchStatus === 200) {
          this.props.dispatchUsernameStorage({ username: signUpInfo.username });
          this.setState({...this.state, loggedIn: true});
          return;
        }
      });
  }


  render(){
    return this.state.loggedIn ? <Navigate to="/dashboard"/> : (
      <div id="signup">
        <form id="sign-up-form" onSubmit={this.onSubmit}>
          <label className='signUpText'>Create An Account</label>
          <br></br>
          <input className="input signUpInput inputFields" name="username" id="usernameInput" type="text" placeholder='username'></input>
          <br></br>
          <input className="input signUpInput inputFields" name="password" id="passwordInput" type="password" placeholder='password'></input>
          <br></br>
          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
    );
  }
}

// export default Signup;
export default connect(null, mapDispatchToProps)(Signup);
