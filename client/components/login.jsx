import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link, Navigate } from 'react-router-dom'

const Login = props => {
  this.state = {username: '', password: ''};
  this.onSubmit = this.onSubmit.bind(this);

  onSubmit() {
    
  }
  return(
      <div id="login">
          <form id="loginform" onSubmit={this.onSubmit}>
      
                  <input name="username" type="text" placeholder="username"></input>
                  <input name="password" type="text" placeholder="password"></input>
                  <button type="submit">Submit</button>
          </form>
          <button>Create Account</button>
      </div>

  );
}

export default connect(null, mapDispatchToProps)(Login);