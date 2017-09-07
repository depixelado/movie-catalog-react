import React from 'react';
import propTypes from 'prop-types';

import MovieSnippet from 'components/MovieSnippet';
import Spinner from 'components/Spinner';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      status,
      movies = [],
      className,
    } = this.props;

    return (
      <ul className="movieList">
        { 
          (status === 'LOADING') 
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