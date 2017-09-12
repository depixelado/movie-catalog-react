import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import thunkMiddleware from 'redux-thunk';

import App from 'components/App';
import reducer from 'reducers';

import './styles/main.scss';

let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducer);
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  )
  store = createStore(
    reducer,
    enhancers,
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)