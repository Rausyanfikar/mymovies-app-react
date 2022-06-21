import React from 'react';
import Header from './Header';
import { withRouter } from '../utils/navigation';

function Layout(props) {
  return (
    <>
      <Header onKeyDown={props.onKeyDown} />
      <div className="h-full w-full bg-white dark:bg-black">{props.children}</div>
    </>
  );
}

export default withRouter(Layout);
