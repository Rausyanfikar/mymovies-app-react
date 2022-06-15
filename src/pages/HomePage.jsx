import Layout from '../components/Layout';
import React, { Component } from 'react';
import { Card, CardLoading } from '../components/Card';
import axios from 'axios';

export default class HomePage extends Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&page=1')
      .then((response) => {
        // handle success

        const { results } = response.data;
        this.setState({ data: results });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <CardLoading />;
    } else {
      return (
        <Layout>
          <div className="m-8  font-extrabold flex  text-pink-700 text-4xl ">
            <h1 className="max-w-fit shadow-md p-1 shadow-black mx-auto">NONTON GRATIS CUMA LIAT POSTER</h1>
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.data.map((item) => (
              <Card key={item.id} title={item.title} image={item.poster_path} />
            ))}
          </div>
        </Layout>
      );
    }
  }
}
