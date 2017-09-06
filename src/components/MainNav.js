import React from 'react';
import styled from 'styled-components';

export default function MainNav({className}) {
  return (
    <div className={className}>
      <Logo>W</Logo>
    </div>
  )
};

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weigth: bold;
  text-align: center;
  padding: 10px;
`