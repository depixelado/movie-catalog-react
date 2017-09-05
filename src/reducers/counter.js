import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../actions';

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.step;
    case DECREMENT_COUNTER:
      return state - action.step;
    default:
      return state
  }
}

export default counterReducer;