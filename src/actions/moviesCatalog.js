export const UPDATE_MOVIES = 'whatseen/moviesCatalog/UPDATE_MOVIES';

export const updateMovies = (movies) => ({
  type: UPDATE_MOVIES,
  movies,
});