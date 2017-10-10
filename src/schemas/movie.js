import { schema } from 'normalizr';
import strategies from 'normalizr-strategies';

import config from '../config';

function map() {
  return {
    strategy: (item, value) => ({
      ...value,
      thumb: `${config.api.imgUrlBase}${value.poster_path}`,
      backdrop: value.backdrop_path ? `https://image.tmdb.org/t/p/w1400_and_h450_bestv2/${value.backdrop_path}` : null,
      releaseYear: value.release_date.split('-')[0],
    }),
  };
}

// Define movies schema
const movieSchema = new schema.Entity(
  'movies',
  {},
  {
    processStrategy: strategies(
      map(),
    ),
  },
);

export default movieSchema;
