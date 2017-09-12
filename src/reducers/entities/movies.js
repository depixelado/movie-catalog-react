import _ from 'lodash';

import {
  RECEIVE_MOVIES
} from 'actions/moviesCatalog';


const entitiesMovies = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        byId: {
          ..._.get('state.entities.movies.byId', {}),
          ...action.data.entities.movies,
        },
        allIds: action.data.result,
      };
    default:
      return state;
  }
};

export default entitiesMovies;
