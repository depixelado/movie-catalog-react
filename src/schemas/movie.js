import { schema } from 'normalizr';
import strategies from 'normalizr-strategies';

import config from '../config';

function map() {
  return {
    strategy: (item, value) => ({
      ...value,
      thumb: `${config.api.imgUrlBase}${value.poster_path}`,
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
