import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const debugMode = false;
const middleware = debugMode ? [thunk, logger] : [thunk];
const rootReducer = (state, action) => {
  // Here we can set custom actions e.g if user logout we can set a state to show an onboarding screen
  return reducers(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Here we can use options like actionsBlacklist, actionsCreators, serialize, etc...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
