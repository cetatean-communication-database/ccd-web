import { combineReducers } from 'redux';
import example from "./example";

// example can now be used as props in the components
const ccdApp = combineReducers({
  example,
})

export default ccdApp;
