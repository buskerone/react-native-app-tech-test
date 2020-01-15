import { combineReducers } from 'redux';

import user from './user';
import looks from './looks';

const combinedReducers = combineReducers({
  user,
  looks,
});

export default combinedReducers;

