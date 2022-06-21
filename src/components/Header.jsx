import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context';
import { Link } from 'react-router-dom';
import img from '../assets/r.png';
import { withRouter } from '../utils/navigation';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <>
      <nav className="sticky top-0 w-full px-2  flex h-full bg-pink-900 ">
        <div className="">
          <Link to="/">
            <img className="w-[140px] h-[100px]" src={img} alt="logo" />
          </Link>
        </div>
        <ul className="ml-auto flex flex-row space-x-10 font-bold my-auto text-xl">
          <label className="relative block w-full sm:w-auto">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for film"
              type="text"
              name="search"
              onKeyDown={props.onKeyDown}
            />
          </label>
          {theme === 'dark' ? <FaSun className="w-8 h-8 text-white" onClick={() => handleThemeChange('light')} /> : <FaMoon className="w-8 h-8 text-white" onClick={() => handleThemeChange('dark')} />}

          <Link className="text-white" to="/favorite">
            Favorite
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default withRouter(Header);
