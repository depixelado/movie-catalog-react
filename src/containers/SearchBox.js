import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  updateSearchText,
} from 'actions/searchBox';

import SearchBox from 'components/SearchBox';

const mapStateToProps = (state) => ({
  searchText: state.searchBox.searchText
})

const mapDispatchToProps = (dispatch) => ({
  updateSearchText: (val) => dispatch(updateSearchText(val)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBox);