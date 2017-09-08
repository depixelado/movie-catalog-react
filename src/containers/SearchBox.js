import { connect } from 'react-redux';

import { 
  updateSearchText,
} from 'actions/searchBox';

import { 
  fetchMovies,
} from 'actions/moviesCatalog';

import SearchBox from 'components/SearchBox';

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
