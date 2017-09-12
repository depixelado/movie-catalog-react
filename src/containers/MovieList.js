import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getMovies,
  isFetching,
} from 'selectors/moviesCatalog';

import MovieList from 'components/MovieList';

const mapStateToProps = (state) => ({
  isFetching: isFetching(state),
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
