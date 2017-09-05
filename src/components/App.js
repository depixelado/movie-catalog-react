import React from 'react';

import MainNav from 'components/mainNav';
import SearchSection from 'components/SearchSection';

const App = function App() {
  return (
    <div className="wrapper">
      <MainNav />
      <SearchSection />
    </div>
  )
};

export default App;