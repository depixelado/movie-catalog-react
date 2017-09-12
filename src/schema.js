import { schema } from 'normalizr';
import strategies, {renameKeys, requiredFields} from 'normalizr-strategies';

import config from './config.js';

function addThumb() {
  return {
    strategy: (item, value) => ({
      ...value,
      thumb: `${config.api.imgUrlBase}${value.poster_path}`,
    }),
  };
}

function addYear() {
  return {
    strategy: (item, value) => ({
      ...value,
      year: value.release_date.split('-')[0],
    }),
  };
}

// Define movies schema
export const movieSchema = new schema.Entity(
  'movies',
  {},
  {
    processStrategy: strategies(
      addThumb(),
      addYear(),
    ),
  },
);