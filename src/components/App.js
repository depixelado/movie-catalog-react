import React from 'react';

import MainNav from '../components/mainNav';
import SearchSection from '../components/SearchSection';

import Counter from '../containers/Counter';

const App = function App() {
  return (
    <div className="wrapper">
      <MainNav />
      <SearchSection />
    </div>
  )
};

export default App;