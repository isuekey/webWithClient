
import * as home from './home.js';

const routers = [
  { path:'/', comp: home.Home }
];

const reducers = (state={}, action)=>{
  return state;
};

export {
  routers,
  reducers
}
