import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/r.png';

function Header(props) {
  return (
    <>
      <nav className="sticky top-0 w-full px-2  flex h-full bg-pink-900">
        <div className="">
          <Link to="/">
            <img className="w-[140px] h-[100px]" src={img} alt="logo" />
          </Link>
        </div>
        <ul className="text-white ml-auto flex flex-row space-x-10 font-bold my-auto text-xl">
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
