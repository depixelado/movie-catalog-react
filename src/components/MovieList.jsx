import React from 'react';
import propTypes from 'prop-types';

import MovieSnippet from 'containers/MovieSnippet';
import Spinner from 'components/Spinner';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isFetching,
      movies = [],
    } = this.props;

    return (
      <ul className="movieList">
        { 
          (isFetching) 
            ? <Spinner />
            : movies.map((movie, index) => (
                <li key={index}>
                  <MovieSnippet {...movie} />
                </li>
              ))
        }
      </ul>
    );
  }
}

export default MovieList;