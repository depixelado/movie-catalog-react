import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import thunkMiddleware from 'redux-thunk'

import App from 'components/App';
import reducer from 'reducers';

import './styles/main.scss';

let store;
const initialState = {
  moviesCatalog: {
  }
}

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducer, initialState);
} else {
  store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)