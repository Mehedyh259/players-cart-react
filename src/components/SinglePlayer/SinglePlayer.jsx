import React from "react";

const SinglePlayer = ({ player, handleSelectPlayer, handleUnSelectPlayer }) => {
  const { about, id, job, name, picture, price } = player;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all">
      <figure>
        <img src={picture} className="h-52 w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p>{about}</p>

        <span className="font-bold">Job : {job}</span>
        <span className="font-bold text-xl">Price : ${price}</span>

        <div className="card-actions justify-between">
          <button
            className="btn btn-primary btn-sm text-md "
            onClick={() => handleSelectPlayer(id, picture, name, price)}
          >
            Add Players
          </button>
          <button
            className="btn btn-primary btn-sm text-md"
            onClick={() => handleUnSelectPlayer(id)}
          >
            Remove Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
