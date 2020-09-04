
import { combineReducers } from 'redux';
import * as reducers from '../reducers';

const store = combineReducers(reducers);

export {
  store
}
