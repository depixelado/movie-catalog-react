import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  updateMovies,
} from 'actions/movies';

import MovieList from 'components/MovieList';

const mapStateToProps = (state) => {
  return ({
    movies: state.movies
  })
}

const mapDispatchToProps = (dispatch) => ({
  updateMovies: (val) => dispatch(updateMovies(val)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);