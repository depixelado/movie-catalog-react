import { combineReducers } from 'redux';

import movies from './movies';

const entities = combineReducers({
  movies,
});

export default entities;
