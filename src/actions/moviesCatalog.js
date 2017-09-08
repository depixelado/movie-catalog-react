import fetch from 'isomorphic-fetch';

import config from '../config';

export const REQUEST_MOVIES = 'whatseen/moviesCatalog/REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'whatseen/moviesCatalog/RECEIVE_MOVIES';
export const INVALIDATED_SEARCH = 'whatseen/moviesCatalog/INVALIDATED_SEARCH';

export const FETCH_MOVIES_REQUEST = 'whatseen/moviesCatalog/FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_FAILURE = 'whatseen/moviesCatalog/FETCH_MOVIES_FAILURE';
export const FETCH_MOVIES_SUCCESS = 'whatseen/moviesCatalog/FETCH_MOVIES_SUCCESS';

export const requestMovies = (searchText) => ({
  type: REQUEST_MOVIES,
  searchText,
});

export const receiveMovies = (searchText, json) => ({
  type: RECEIVE_MOVIES,
  searchText,
  movies: json.results.map(movie => ({
    title: movie.title,
    description: movie.overview,
    thumb: `${config.api.imgUrlBase}${movie.poster_path}`,
    year: movie.release_date.split('-')[0],
  })),
  receivedAt: Date.now(),
});

export function fetchMovies(searchText) {
  return function fetchMoviesThunk(dispatch) {
    dispatch(requestMovies(searchText));

    const url = `${config.api.urlBase}/search/movie?query=${searchText}&api_key=${config.api.key}`;
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error),
      )
      .then(json =>
        dispatch(receiveMovies(searchText, json)),
      );
  };
}
