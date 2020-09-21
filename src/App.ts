
import './App.css';
import * as features from './features';
import * as meta from './meta';

const routers = [
  ...features.example.routers,
  ...features.home.routers,
];

const baseStore = {};
const defaultReducers = (store:any=baseStore, action?:any) => {
  console.log('action', action);
  return store;
};

export const homeReducers = features.home.reducers;
export const exampleReducers = features.example.reducers;
const reducers = {
  defaultReducers, homeReducers, exampleReducers
};


export {
  routers,
  reducers,
  meta,
};
