export const getMovie = (state, movieId) => state.entities.movies.byId[movieId];

export const getMovies = (state) => state.moviesCatalog.items.map(
  (movieId) => getMovie(state, movieId),
);

export const isFetching = (state) => state.moviesCatalog.isFetching;

export const getMovieOnExplorer = (state) => {
  const movieId = state.moviesCatalog.movieExplorer;
  return movieId
    ? getMovie(state, state.moviesCatalog.movieExplorer)
    : null;
};
