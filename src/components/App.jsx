import React from 'react';

import MainNav from 'components/mainNav';
import SearchSection from 'components/SearchSection';
import MovieViewer from 'containers/movieViewer';

const App = function App({movieOnExplorer}) {
  return (
    <div className="app">
      <SearchSection movieExplorerOpened={!!movieOnExplorer} />
      {
        movieOnExplorer !== null 
          ? <MovieViewer movie={movieOnExplorer} />
          : ''
      }
    </div>
  )
};

export default App;