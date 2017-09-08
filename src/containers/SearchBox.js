import { connect } from 'react-redux';

import SearchBox from 'components/SearchBox';

import { 
  updateSearchText,
} from 'actions/searchBox';

import { 
  fetchMovies,
} from 'actions/moviesCatalog';

import {
  getSearchText,
} from 'selectors/searchBox';

const mapStateToProps = (state) => ({
  searchText: state.searchBox.searchText,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchText: (val) => dispatch(updateSearchText(val)),
  fetchMovies: (val) => dispatch(fetchMovies(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBox);
