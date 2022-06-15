import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <>
        <div className="container grow p-7   flex flex-col bg-slate-700 max-w-sm mx-auto rounded-md  text-white">
          <img className="max-w-full  h-auto" width="500" height="750" src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.image} />
          <p className="py-4">{this.props.title}</p>
          <button className="bg-pink-800 justify-center h-10 hover:bg-pink-900 rounded-md mt-auto">Add to Favorite</button>
        </div>
      </>
    );
  }
}

class CardLoading extends Component {
  render() {
    return (
      <>
        <div className="flex bg-white w-full h-screen">
          <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
        </div>
      </>
    );
  }
}

export { Card, CardLoading };
