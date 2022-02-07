import React from 'react';
import Header from './common/Header';

const Base = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default Base;
