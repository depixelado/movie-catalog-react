import _ from 'lodash';

export const getMovie = (state, movieId) => state.entities.movies.byId[movieId];

export const getMovies = (state) => {
  const items = _.get(state, 'moviesCatalog.items', []);
  return items.map((movieId) => getMovie(state, movieId));
};

export const isFetching = (state) => state.moviesCatalog.isFetching;

export const getMovieOnExplorer = (state) => {
  const movieId = state.moviesCatalog.movieExplorer;
  return movieId
    ? getMovie(state, state.moviesCatalog.movieExplorer)
    : null;
};
