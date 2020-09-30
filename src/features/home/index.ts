
import * as home from './home';

const routers = [
  { path:'/', component: home.Home }
];

const reducers = (state={}, action:any)=>{
  return state;
};

export {
  routers,
  reducers
}
