import { connect } from 'react-redux';

import MovieSnippet from 'components/MovieSnippet';

import { 
  openMovieExplorer,
} from 'actions/moviesCatalog';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  openMovieExplorer: (movieId) => dispatch(openMovieExplorer(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieSnippet);
