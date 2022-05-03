import React, { component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// Im not sure abou the imports, letz looks into it
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import SignUp from './components/signup.jsx';
import './style/style.css';

const App = props => {
  return (
    <div className="router">
      <main>
        {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reacttraining.com/react-router/web/guides/quick-start
        */}
        <h1>Welcome to Pigeon Notes!</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;


// <Route
// exact
// path="/signup"
// component={signup} // this would be login.jsx
// />

// <Route
// exact
// path="/createCourse"
// component={createCourse}
// />