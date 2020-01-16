import { combineReducers } from 'redux';

import user from './user';
import look from './look';

const combinedReducers = combineReducers({
  user,
  look,
});

export default combinedReducers;

