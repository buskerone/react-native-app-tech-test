import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/navigation';
import {store} from './src/redux/store';

const App = props => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
