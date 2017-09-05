import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getCounter,
} from '../selectors/counter';

import { 
  incrementCounter,
  decrementCounter,
} from '../actions';

import Counter from '../components/Counter';

const mapStateToProps = (state) => ({
  counter: getCounter(state.counter)
})

const mapDispatchToProps = (dispatch) => ({
  incrementCounterByfive: () => dispatch(incrementCounter(5)),
  decrementCounterByTwo: () => dispatch(decrementCounter(2)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);