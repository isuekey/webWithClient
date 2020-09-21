
import * as example from './example';

const routers = [
  { path:'/example', comp:example.Example }
];

const reducers =  example.reducers;

export {
  routers,
  reducers
}
