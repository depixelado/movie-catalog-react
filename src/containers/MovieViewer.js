import { connect } from 'react-redux';

import MovieViewer from 'components/MovieViewer';

import { 
  closeMovieExplorer,
} from 'actions/moviesCatalog';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  closeMovieExplorer: () => dispatch(closeMovieExplorer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieViewer);
