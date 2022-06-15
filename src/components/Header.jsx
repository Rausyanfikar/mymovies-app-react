import React, { Component } from 'react';
import img from '../assets/r.png';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="sticky top-0 w-full px-2  flex h-full bg-pink-900">
          <div className="">
            <a href="/">
              <img src={img} className="w-36 h-24" alt="" />
            </a>
          </div>
          <ul className="text-white ml-auto flex flex-row space-x-10 font-bold my-auto text-xl">
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
