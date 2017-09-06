import { combineReducers } from 'redux';
import searchBox from './searchBox';
import movies from './movies';

const whatseenApp = combineReducers({
  searchBox,
  movies,
})

export default whatseenApp