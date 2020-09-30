
import * as example from './example';

const routers = [
  { path:'/example', component:example.Example }
];

const reducers =  example.reducers;

export {
  routers,
  reducers
}
