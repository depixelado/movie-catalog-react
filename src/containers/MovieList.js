import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getMovies,
  isFetching,
} from 'selectors/moviesCatalog';

import {
  getSearchText,
} from 'selectors/searchBox';

import {
  fetchMovies,
} from 'actions/moviesCatalog';

import MovieList from 'components/MovieList';

const mapStateToProps = (state) => ({
  isFetching: isFetching(state),
  movies: getMovies(state),
  searchText: getSearchText(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (search, page) => dispatch(fetchMovies(search, page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
