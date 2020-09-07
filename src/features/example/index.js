
import * as example from './example';

const routers = [
  { path:'/example', comp:example.Example }
];
const reducers = (state={}, action)=>{
  return state;
};

export {
  routers,
  reducers
}
