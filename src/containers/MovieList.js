import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  updateMovies,
} from 'actions/moviesCatalog';

import {
  getMovies,
  getMovieCatalogStatus
} from 'selectors/moviesCatalog';

import MovieList from 'components/MovieList';

const mapStateToProps = (state) => {
  return ({
    status: getMovieCatalogStatus(state),
    movies: getMovies(state)
  })
}

const mapDispatchToProps = (dispatch) => ({
  updateMovies: (val) => dispatch(updateMovies(val)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);