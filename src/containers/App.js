import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  updateMovies,
} from 'actions/moviesCatalog';

import {
  getMovieOnExplorer,
} from 'selectors/moviesCatalog';

import App from 'components/App';

const mapStateToProps = (state) => ({
  movieOnExplorer: getMovieOnExplorer(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
