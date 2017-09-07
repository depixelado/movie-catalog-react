import { combineReducers } from 'redux';

// import {
//   UPDATE_MOVIES,
// } from 'actions/MOVIES';

const initialState = {
  status: 'LOADING',
  items: []
}

const items = (state = initialState.items, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const status = (state = initialState.status, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  status,
  items,
});