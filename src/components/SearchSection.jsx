import React from 'react';

import SearchBox from 'containers/SearchBox';
import MovieList from 'containers/MovieList';

export default function searchSection({searchText, movieExplorerOpened}) {
  let classes = "searchSection";
  classes +=  movieExplorerOpened ? ' searchSection--blurred' : '';

  return (
    <div className={classes}>
      <SearchBox />
      <MovieList />
    </div>
  )
};