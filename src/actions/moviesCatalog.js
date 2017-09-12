import { normalize } from 'normalizr';
import fetch from 'isomorphic-fetch';

import config from '../config';
import movieSchema from 'schemas/movie';

export const REQUEST_MOVIES = 'whatseen/moviesCatalog/REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'whatseen/moviesCatalog/RECEIVE_MOVIES';
export const INVALIDATED_SEARCH = 'whatseen/moviesCatalog/INVALIDATED_SEARCH';

export const FETCH_MOVIES_REQUEST = 'whatseen/moviesCatalog/FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_FAILURE = 'whatseen/moviesCatalog/FETCH_MOVIES_FAILURE';
export const FETCH_MOVIES_SUCCESS = 'whatseen/moviesCatalog/FETCH_MOVIES_SUCCESS';

export const OPEN_MOVIE_EXPLORER = 'whatseen/moviesCatalog/OPEN_MOVIE_EXPLORER';
export const CLOSE_MOVIE_EXPLORER = 'whatseen/moviesCatalog/CLOSE_MOVIE_EXPLORER';

export const requestMovies = (searchText) => ({
  type: REQUEST_MOVIES,
  searchText,
});

export const receiveMovies = (searchText, data) => ({
  type: RECEIVE_MOVIES,
  searchText,
  data,
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
      .then(json => normalize(json.results, [movieSchema]))
      .then(normalizedData => dispatch(receiveMovies(searchText, normalizedData)));
  };
}

export function openMovieExplorer(movieId) {
  return {
    type: OPEN_MOVIE_EXPLORER,
    movieId,
  };
}

export function closeMovieExplorer() {
  return {
    type: CLOSE_MOVIE_EXPLORER,
  };
}
