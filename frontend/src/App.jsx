import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Constants from 'Constants';
import PrivateRoute from 'components/PrivateRoute';
import Login from './pages/auth/Login';
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';

require('dotenv').config(); // allows us to inject environment variables

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        {/* Private Routes */}
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/applicants">
          <Dashboard section={Constants.dashboard.sections.APPLICANTS} />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/admin-commands">
          <Dashboard section={Constants.dashboard.sections.ADMIN_COMMANDS} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
