import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import App from 'components/App';
import reducer from 'reducers';

import './styles/main.scss';

let store;
const initialState = {
  searchBox: {
    searchText: 'Star wars'
  },
  moviesCatalog: {
    status: 'LOADED',
    items: [
      {
        title: 'Star Wars IV',
        year: '2015',
        thumb: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg',
        description: `Per vestibulum sociosqu sapien parturient potenti metus scelerisque 
          fermentum vestibulum ad adipiscing vel condimentum a adipiscing id parturient id. 
          Imperdiet habitant leo semper dui phasellus luctus facilisi nibh mollis 
          mi posuere ultrices parturient bibendum parturient.`
      },
      {
        title: 'Star Wars V',
        year: '2015',
        thumb: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg',
        description: `Per vestibulum sociosqu sapien parturient potenti metus scelerisque 
          fermentum vestibulum ad adipiscing vel condimentum a adipiscing id parturient id. 
          Imperdiet habitant leo semper dui phasellus luctus facilisi nibh mollis 
          mi posuere ultrices parturient bibendum parturient.`
      },
      {
        title: 'Star Wars VI',
        year: '2015',
        thumb: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg',
        description: `Per vestibulum sociosqu sapien parturient potenti metus scelerisque 
          fermentum vestibulum ad adipiscing vel condimentum a adipiscing id parturient id. 
          Imperdiet habitant leo semper dui phasellus luctus facilisi nibh mollis 
          mi posuere ultrices parturient bibendum parturient.`
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducer, initialState);
} else {
  store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)