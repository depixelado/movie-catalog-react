import { combineReducers } from 'redux';

import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  INVALIDATED_SEARCH,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
} from 'actions/moviesCatalog';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const moviesCatalog = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATED_SEARCH:
      return Object.assign({}, state, {
        didInvalidate: true,
      });

    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });

    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.data.result,
      });

    default:
      return state;
  }
};

export default moviesCatalog;
