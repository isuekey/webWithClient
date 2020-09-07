import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import * as app from './App';
import * as layout from './layout';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers(app.reducers));
console.log('store', store);
ReactDOM.render(
  <Provider store={store}>
    <app.App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
