import fetch from 'isomorphic-fetch';

// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export let store = createStoreWithMiddleware(reducers);

import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>, 
  document.querySelector('.content')
);