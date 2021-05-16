import React from 'react';
import Header from './common/Header';

const Base = ({ children }) => (
  <div>
    {localStorage.getItem('access_token') ? <Header /> : ''}
    <main>{children}</main>
  </div>
);

export default Base;
