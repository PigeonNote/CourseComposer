import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
// Im not sure abou the imports, letz looks into it

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
        <Switch>
          <Route
            exact
            path="/"
            component={login} // this would be login.jsx
          />
          <Route
            exact
            path="/signup"
            component={signup} // this would be login.jsx
          />
          <Route
            exact
            path="/dashboard"
            component={dashboard}
          />
          <Route
            exact
            path="/createCourse"
            component={createCourse}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;