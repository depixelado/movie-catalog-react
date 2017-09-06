import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import MovieSnippetComponent from 'components/MovieSnippet';

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
      <ul className={className}>
        { 
          movies.map((movie, index) => (
            <MovieListItem key={index}>
              <MovieSnippet {...movie} />
            </MovieListItem>
          ))
        }
      </ul>
    );
  }
}

const MovieSnippet = styled(MovieSnippetComponent)`
  background: white;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #ddd;
  padding: 10px;
  font-size: 12px;
  color: #666;
  overflow: hidden;
`

const MovieListItem = styled.li`
  margin: 0 20px 20px 0;
  min-width: 20%;
  max-width: 30%;
`


export default MovieList;