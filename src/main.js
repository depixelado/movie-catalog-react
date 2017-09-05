import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)