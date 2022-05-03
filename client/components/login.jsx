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
    //fetch to login
    this.setState({...this.state, loggedIn: true}) //replace as a condition of fetch request to DB
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
