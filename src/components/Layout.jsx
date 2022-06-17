import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
}

export default Layout;
