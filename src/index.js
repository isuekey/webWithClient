import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import * as app from './App.js';
import * as layout from './layout';
import * as serviceWorker from './serviceWorker';

const { reducers, AppGenerator } = app;
const App = AppGenerator();
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
// console.log('store', App, reducers, app);
ReactDOM.render(
  <Provider store={store}>
    <layout.Layout>
      <App />      
    </layout.Layout>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default app;
export * from './App.js';
