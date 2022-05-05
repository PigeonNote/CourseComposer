import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link, Navigate } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  dispatchUsernameStorage: (username => {
    dispatch(actions.storeUserData(username));
  })
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', loggedIn: false };
    this.onSubmit = this.onSubmit.bind(this);
    // this.sendToSignUp = this.sendToSignUp.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    let fetchStatus;
    //fetch to login
    const loginInfo = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)

    })
      .then((response) => {
        fetchStatus = response.status;
        console.log('fetchStatus: ', fetchStatus);
        if (fetchStatus === 200) {
          console.log('this.props is:', this.props);
          this.props.dispatchUsernameStorage({ username: loginInfo.username });
          this.setState({ ...this.state, loggedIn: true });
          return;
        } else {
          alert('Login Error');
        }
      });
  }
  
  render() {
    return this.state.loggedIn ? <Navigate to="/dashboard"/> : (
      <div id="LoginBox">
        <form id="loginForm" onSubmit={this.onSubmit}>
          <div className="inputContainer">
            {/* <span>Username: </span>  */}
            <input name="username" id="loginUsernameInput" type="text" placeholder='username'></input>
          </div>

          <div className="inputContainer">
            {/* <span>Password: </span>  */}
            <input name="password" id="loginPasswordInput" type="password" placeholder='password'></input>
          </div>
          <div className='buttonContainer'> 
            <button className="loginPageButton" type="submit" >Log In</button>
            <br/>
            <Link className="loginPageButton" to={'/signup'}>Sign Up</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
