import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="">
          <div>
            <a href="/">RausyanMovie</a>
          </div>
          <ul>
            <li>
              <a href="/">Hot Movies</a>
            </li>
            <li>
              <a href="/">Favorite</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
