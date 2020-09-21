
import * as home from './home.js';

const routers = [
  { path:'/', component: home.Home }
];

const reducers = (state={}, action)=>{
  return state;
};

export {
  routers,
  reducers
}
