import React from 'react';
import styled from 'styled-components';

import MainNavComponent from 'components/mainNav';
import SearchSectionComponent from 'components/SearchSection';

const App = function App({className}) {
  return (
    <div className={className}>
      <MainNav />
      <SearchSection />
    </div>
  )
};

const MainNav = styled(MainNavComponent)`
  width: 50px;
  background: #004358;
  display: flex;
  flex-direction: column;
`

const SearchSection = styled(SearchSectionComponent)`
  background: #eee;
  flex: 1;
  padding: 10px;
`

export default styled(App)`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;