import { combineReducers } from 'redux';
import searchBox from './searchBox';
import moviesCatalog from './moviesCatalog';

const whatseenApp = combineReducers({
  searchBox,
  moviesCatalog,
})

export default whatseenApp