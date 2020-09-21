import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';
import './index.css';
import * as routers from './router';
import * as app from './App';
import * as serviceWorker from './serviceWorker';

const { reducers } = app;
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

function switchRoute(routes:Array<RouteProps>=[]) {
  return routes.map((route,idx) => {
    return (
      <Route key={idx} {...route}>
      </Route>
    );
  });
};


// console.log('store', App, reducers, app);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        { switchRoute(routers.routers) }
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export * from './App';
