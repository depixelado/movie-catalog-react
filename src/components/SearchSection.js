import React from 'react';
import styled from 'styled-components';

import SearchBox from 'containers/SearchBox';
import MovieListComponent from 'containers/MovieList';

export default function searchSection({className, searchText}) {
  return (
    <div className={className}>
      <SearchBox />
      <MovieList />
    </div>
  )
};

const MovieList = styled(MovieListComponent)`
  margin: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`

