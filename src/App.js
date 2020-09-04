import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import * as routers from './router.js';

function switchRoute(routers=[]) {
  return routers.map(route => {
    return (
      <Route path={route.path}>
        <route.comp />
      </Route>
    );
  });
};

function App() {
  return (
    <Router>
      <Switch>
        { switchRoute(routers.routes) }
      </Switch>
    </Router>
  );
};

export default App;
