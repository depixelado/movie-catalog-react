import React from 'react';
import CounterBtn from '../components/CounterBtn';
import CounterNumber from '../components/CounterNumber';

const Counter = function Counter({counter, incrementCounterByfive, decrementCounterByTwo}) {
  return (
    <div className="container">
      <CounterNumber
        number={counter}
      />
      <br />
      <CounterBtn
        label={'Increment by 5'}
        handleChangeCounter={incrementCounterByfive}
      />
      <br />
      <CounterBtn
        label={'Decrement by 2'}
        handleChangeCounter={decrementCounterByTwo}
      />
      </div>
  )
};

export default Counter;