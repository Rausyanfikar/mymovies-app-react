import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="sticky top-0 w-full px-2 py-4 flex h-full bg-pink-900">
          <div className="text-white font-bold">
            <a href="/">RausyanMovie</a>
          </div>
          <ul className="text-white ml-auto flex flex-row space-x-10 font-bold">
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
