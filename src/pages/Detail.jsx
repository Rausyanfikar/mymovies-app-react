import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { withRouter } from '../utils/navigation';
import axios from 'axios';
import { CardLoading } from '../components/Card';

const Detail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, {});

  function fetchData() {
    const { movie_id } = props.params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US`)
      .then((response) => {
        // handle success
        console.log(response.data);
        const { data } = response;
        setData(data);
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
      <Layout title={'Home'}>
        <div className="w-full h-screen flex ">
          <div className="w-full h-full" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="h-auto w-3/4 m-auto mt-5 grid grid-flow-row md:grid-flow-col bg-slate-400 bg-opacity-60">
              <div className="col-span-1 m-auto p-7 flex flex-col ">
                <img src={data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} alt="MoviePoster" className="h-[60vh]" />
                <a href={data.homepage} className="bg-slate-300 px-12 py-3 rounded-md hover:bg-slate-500 hover:bg-opacity-50 flex justify-center item-center mt-5 space-x-8 bg-opacity-30 border-2 border-slate-300">
                  <p>Watch Now</p>
                </a>
              </div>
              <div className="col-span-3 p-7 flex flex-col">
                <h1 className="text-2xl font-bold mb-4 text-center">{data.title}</h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Runtime :</span> {data.runtime}
                </h1>

                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Release Date :</span> {data.release_date}
                </h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Status :</span> {data.status}
                </h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Language :</span> {data.original_language}
                </h1>
                <p>
                  <span className="font-bold">Overview : </span>
                  {data.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Detail);
