import React from 'react';

import SearchBox from 'containers/SearchBox';
import MovieList from 'containers/MovieList';

export default function searchSection({searchText}) {
  return (
    <div className="searchSection">
      <SearchBox />
      <MovieList />
    </div>
  )
};