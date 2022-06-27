import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { withRouter } from '../utils/navigation';
import axios from 'axios';
import { CardLoading } from '../components/Card';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [similiar, setSimiliar] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchData();
    getSimiliar();
  }, []);

  function fetchData() {
    console.log(params);
    const { movie_id } = params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&append_to_response=videos,credits`)
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

  function getSimiliar() {
    const { movie_id } = props.params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&page=1`)
      .then((response) => {
        // handle success
        console.log(response.data.results);
        const similiar = response.data.results;
        setSimiliar(similiar);
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
        <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="flex justify-center items-center">
            <div className="w-3/4 lg:grid lg:grid-flow-col  gap-4 bg-white/60 border-2 border-slate-800 rounded-lg p-3 shadow-lg shadow-black mt-20 ">
              <div className="flex justify-center item-center flex-col">
                <img src={data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} alt="MoviePoster" className="w-[120vw] sm:w-[60vw]" />
                <a href={data.homepage} className="bg-pink-300  py-3 rounded-md hover:bg-pink-500 hover:bg-opacity-50 flex justify-center item-center mt-5 space-x-8 bg-opacity-30 border-2 border-slate-300">
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
                  <span className="font-bold">Genre :</span> {data.genres.map((genre) => genre.name).join(', ')}
                </h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Language :</span> {data.original_language}
                </h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Status :</span> {data.status}
                </h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Popularity :</span> {data.popularity}
                </h1>
                <h1 className="font-semibold text-xl font-sans">
                  <span className="font-bold">Revenue :</span> {data.revenue}
                </h1>
                <p>
                  <span className="font-bold text-xl font-sans">Overview : </span>
                  {data.overview}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 sm:mt-10">
            <iframe
              className="w-full h-[25vh] sm:h-[40vh] md:h[50vh] md:w-3/4"
              width="1000"
              height="315"
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <h1 className=" text-center p-10 font-bold text-xl text-white">Similar Movie</h1>
          <div className="w-full h-auto flex justify-center">
            <div className="w-3/4 grid  sm:grid-col-2 lg:grid-cols-4 gap-3">
              {similiar.map((item, index) => (
                <div key={index}>
                  <a href={`/movie/${item.id}`} className="flex justify-center">
                    <img src={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} alt="MoviePoster" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Detail);
