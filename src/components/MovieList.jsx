import React from 'react';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import MovieSnippet from 'containers/MovieSnippet';
import Spinner from 'components/Spinner';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnScrollDown = this._handleOnScrollDown.bind(this);
  }

  _handleOnScrollDown(page) {
    const {
      fetchMovies,
      searchText,
    } = this.props;

    fetchMovies(searchText, page);
  }

  render() {
    const {
      isFetching,
      movies = [],
      searchText,
    } = this.props;

    const list = (
      <InfiniteScroll
          pageStart={1}
          loadMore={this._handleOnScrollDown}
          hasMore={true || false}
          loader={<Spinner />}
          initialLoad={false}
      >
        <ul className="movieList">
          { 
            movies.map((movie, index) => (
              (movie.poster_path)
              ? <li key={index}>
                  <MovieSnippet {...movie} />
                </li>
              : ''
            ))
          }
        </ul>
      </InfiniteScroll>
    );

    return (searchText) ? list : null;
  }
}

export default MovieList;