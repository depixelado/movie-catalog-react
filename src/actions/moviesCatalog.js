import fetch from 'isomorphic-fetch';

const API_KEY = 'c1b91b8e8ae51f665372c46002abc567';
const API_BASE_URL = 'https://api.themoviedb.org/3';


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
    thumb: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`,
    year: movie.release_date.split('-')[0]
  })),
  receivedAt: Date.now()
});

export function fetchMovies(searchText) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestMovies(searchText))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    const url = `${API_BASE_URL}/search/movie?query=${searchText}&api_key=${API_KEY}`;
    console.log('url', url);
    return fetch(url)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveMovies(searchText, json))
      )
  }
}

