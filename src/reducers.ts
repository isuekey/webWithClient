
import { example, home } from './features';

const baseStore = {};
const defaultReducers = (store=baseStore, action:any) => {
  console.log('action', action);
  return store;
};


export {
  defaultReducers,
};

export const homeReducers = home.reducers;
export const exampleReducers = example.reducers;

