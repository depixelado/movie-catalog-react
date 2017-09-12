export const getMovies = (state) => state.moviesCatalog.items.map(
  (movieId) => state.entities.movies.byId[movieId],
);

export const isFetching = (state) => state.moviesCatalog.isFetching;
