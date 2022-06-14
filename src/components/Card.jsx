import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <>
        <div className="container grow p-7  flex flex-col bg-slate-700 max-w-sm mx-auto rounded-md space-y-4 text-white">
          <img className="max-w-full h-auto" width="500" height="750" src={this.props.image} alt={this.props.image} />
          <p>{this.props.title}</p>
          <button className="bg-pink-800 justify-center h-10 hover:bg-pink-900 rounded-md">Add to Favorite</button>
        </div>
      </>
    );
  }
}
