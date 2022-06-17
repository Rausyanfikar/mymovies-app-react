import { Card, CardLoading } from '../components/Card';
import { withRouter } from '../utils/navigation';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&page=1')
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

  if (loading) {
    return <CardLoading />;
  } else {
    return (
      <Layout>
        <div className="m-8  font-extrabold flex  text-pink-700 text-4xl ">
          <h1 className="max-w-fit shadow-md p-1 shadow-black mx-auto">NONTON GRATIS CUMA LIAT POSTER</h1>
        </div>
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {data.map((item) => (
            <Card key={item.id} title={item.title} image={item.poster_path} onClickItem={() => navigate(`movie/${item.id}`)} />
          ))}
        </div>
      </Layout>
    );
  }
};

export default withRouter(HomePage);
