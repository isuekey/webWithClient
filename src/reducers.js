
import { example, home } from './features';

const baseStore = {};
const defaultReducers = (store=baseStore, action) => {
  return store;
};


export {
  defaultReducers,
};

export const homeReducers = home.reducers;
export const exampleReducers = example.reducers;

