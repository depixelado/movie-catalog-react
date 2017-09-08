import { combineReducers } from 'redux';

import {
  UPDATE_SEARCHTEXT,
} from 'actions/searchBox';

const initialState = {
  searchText: '',
};

const searchText = (state = initialState.searchText, action) => {
  switch (action.type) {
    case UPDATE_SEARCHTEXT:
      return action.searchText;
    default:
      return state;
  }
};

export default combineReducers({
  searchText,
});
