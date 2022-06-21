import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <>
      <Header onKeyDown={props.onKeyDown} />
      <div className="h-full w-full bg-white dark:bg-black">{props.children}</div>
    </>
  );
}

export default Layout;
