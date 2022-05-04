import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link, Navigate} from 'react-router-dom';

// const mapDispatchToProps = dispatch => {
//   dispatchUsernameStorage: (username) => {
//     dispatch(actions.storeUserData(username));
//   }; 
// };

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', loggedIn: false };
    this.onSubmit = this.onSubmit.bind(this);
    // this.sendToSignUp = this.sendToSignUp.bind(this);
  }
  onSubmit(event) {
    console.log('Inside onSubmit');
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
        return response.json();
      })
      .then((data) => {
        console.log('data is:', data);
        if (fetchStatus === 200) {
          this.setState({...this.state, loggedIn: true});
          return;
        }
        else {
          return alert('login unsuccessful');
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


// return(
//   <div id="login">
//     <form id="loginform" onSubmit={this.onSubmit}>   
//       <input name="username" type="text" placeholder="username"></input>
//       <input name="password" type="text" placeholder="password"></input>
//       <button type="submit">Submit</button>
//     </form>
//     <button>Create Account</button>
//   </div>
// );

export default Login;
//export default connect(null, mapDispatchToProps)(Login);
