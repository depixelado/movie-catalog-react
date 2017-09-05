export const INCREMENT_COUNTER = 'counter/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'counter/DECREMENT_COUNTER';

export const incrementCounter = (step) => ({
  type: INCREMENT_COUNTER,
  step,
});

export const decrementCounter = (step) => ({
  type: DECREMENT_COUNTER,
  step,
});