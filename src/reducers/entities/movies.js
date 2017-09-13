import _ from 'lodash';

import {
  RECEIVE_MOVIES
} from 'actions/moviesCatalog';

const initialState = {
  byId: {},
  allIds: [],
};

const entitiesMovies = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.data.entities.movies,
        },
        allIds: _.concat(state, _.get('entities.movies.allIds', []), action.data.result),
      };
    default:
      return state;
  }
};

export default entitiesMovies;
