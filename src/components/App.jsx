import React from 'react';

import MainNav from 'components/mainNav';
import SearchSection from 'components/SearchSection';
import MovieViewer from 'components/movieViewer';

const App = function App({movieOnExplorer}) {
  return (
    <div className="app">
      <MainNav />
      <SearchSection />
      {
        movieOnExplorer !== null 
          ? <MovieViewer movie={movieOnExplorer} />
          : ''
      }
    </div>
  )
};

export default App;