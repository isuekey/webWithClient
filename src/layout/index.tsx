
import React from 'react';
import * as navbar from './navbar';
import * as sideMenu from './sideMenu.js';
import * as app from '../App';
import './layout.css';
import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';

function switchRoute(routes:Array<RouteProps>=[]) {
  return routes.map((route,idx) => {
    return (
      <Route key={idx} {...route}>
      </Route>
    );
  });
};

class Layout extends React.PureComponent{
  render() {
    return (
      <div className="flex-col flex-wrap bg-show height-100 content-top">
        <navbar.Navbar />
        <div className="flex-row flex-wrap flex">
          <sideMenu.SideMenu />
          <div className="flex-col flex">
            <Router>
              <Switch>
                {switchRoute(app.routers)}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Layout
}
