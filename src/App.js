import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import * as routers from './router.js';
import * as reducers from './reducers.js';
import * as meta from './meta';

function switchRoute(routers=[]) {
  return routers.map(route => {
    return (
      <Route path={route.path} key={route.path}>
        <route.comp />
      </Route>
    );
  });
};

function AppGenerator(){
  return function() {
    return (
      <Router>
        <Switch>
          { switchRoute(routers.routes) }
        </Switch>
      </Router>
    );
  }
};
const App = AppGenerator();

export default App;
export {
  App,
  routers,
  reducers,
  meta,
  AppGenerator
};
