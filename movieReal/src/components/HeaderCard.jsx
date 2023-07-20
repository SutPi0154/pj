import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const HeaderCard = ({ movie }) => {
  return (
    <>
      <div className=" w-full h-full relative">
        <img
          className=" h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="naruto"
        />
        <div className=" dark-ov"></div>
        <div className=" text-box">
          <h1 className=" text-5xl mb-1 font-extrabold">{movie?.title}</h1>
          <p className=" text-lg font-medium">{movie?.overview}</p>
          <button className="  mt-3 bg-white text-black px-3 py-2 rounded-md font-bold text-lg">
            <PlayCircleIcon className=" w-6  inline-block h-6 " />  Watch Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
