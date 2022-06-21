import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { reduxAction } from '../utils/redux/actions/actions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Favorite from '../pages/Favorite';
import Detail from '../pages/Detail';
import { ThemeContext } from '../utils/context';

const Rot = (props) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('light');
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const tempLocal = localStorage.getItem('favMovie');
    if (tempLocal) {
      dispatch(reduxAction('SET_FAVORITE', JSON.parse(tempLocal)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default Rot;
