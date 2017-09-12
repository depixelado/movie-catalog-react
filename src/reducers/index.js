import { combineReducers } from 'redux';
import searchBox from './searchBox';
import moviesCatalog from './moviesCatalog';
import entities from './entities';

const whatseenApp = combineReducers({
  entities,
  searchBox,
  moviesCatalog,
});

export default whatseenApp;
