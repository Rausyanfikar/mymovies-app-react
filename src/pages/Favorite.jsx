import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../components/Layout';
import { Card } from '../components/Card';
import { withRouter } from '../utils/navigation';

import '../styles/App.css';

const Homepage = (props) => {
  const favorite = useSelector((state) => state.favorite);
  const navigate = useNavigate();
  console.log(favorite);

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {favorite.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.poster_path}
            onClickItem={() => navigate(`/movie/${item.id}`)}
            //onClickFav={() => handleFav(item)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default withRouter(Homepage);
