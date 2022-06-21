import { Card, CardLoading } from '../components/Card';
import { withRouter } from '../utils/navigation';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { reduxAction } from '../utils/redux/actions/actions';

const HomePage = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&page=1`)
      .then((response) => {
        // handle success

        const { results } = response.data;
        setData(results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.keyCode === 13) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
        .then((res) => {
          const { results } = res.data;
          setData(results);
        })
        .catch((err) => alert(err.toString()));
    }
  };

  const handleFav = (item) => {
    const tempLocal = localStorage.getItem('favMovie');
    if (tempLocal) {
      const temp = JSON.parse(tempLocal);
      temp.push(item);
      localStorage.setItem('favMovie', JSON.stringify(temp));
      dispatch(reduxAction('SET_FAVORITE', temp));
    } else {
      localStorage.setItem('favMovie', JSON.stringify([item]));
      dispatch(reduxAction('SET_FAVORITE', [item]));
    }
    alert('Added to favorite');
  };

  if (loading) {
    return <CardLoading />;
  } else {
    return (
      <Layout onKeyDown={(e) => handleSearch(e)}>
        <div className="  font-extrabold flex  text-pink-700 text-xl ">
          <h1 className="max-w-fit  p-3 mx-auto ">NONTON GRATIS CUMA LIAT POSTER</h1>
        </div>
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {data.map((item) => (
            <Card key={item.id} title={item.title} image={item.poster_path} onClickItem={() => navigate(`movie/${item.id}`)} onClickFav={() => handleFav(item)} item={item} />
          ))}
        </div>
      </Layout>
    );
  }
};

export default withRouter(HomePage);
