import React from 'react';
import propTypes from 'prop-types';

import MovieSnippet from 'components/MovieSnippet';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      movies = [],
      className,
    } = this.props;

    return (
      <ul className="movieList">
        { 
          movies.map((movie, index) => (
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