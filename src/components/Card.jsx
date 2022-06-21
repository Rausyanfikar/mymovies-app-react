import React from 'react';

function Card(props) {
  return (
    <>
      <div className="container grow p-7   flex flex-col bg-slate-700 max-w-sm mx-auto rounded-md  text-white">
        <div className="cursor-pointer" onClick={props.onClickItem}>
          <img className="max-w-full  h-auto" width="500" height="750" src={props.image ? `https://image.tmdb.org/t/p/w500${props.image}` : 'https://via.placeholder.com/500x750?text=No+Image'} alt={props.image} />
          <p className="py-4">{props.title}</p>
        </div>
        <button className="bg-pink-800 justify-center h-10 hover:bg-pink-900 rounded-md mt-auto " onClick={props.onClickFav}>
          Add to Favorite
        </button>
      </div>
    </>
  );
}

function CardLoading(props) {
  return (
    <>
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    </>
  );
}

export { Card, CardLoading };
