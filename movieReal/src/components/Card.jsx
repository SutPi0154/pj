import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Card = ({ movie }) => {
  return (
    <Link to={`/detail/${movie?. id}`} className=" rounded-md relative">
      <img
        className=" rounded-md w-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt=""
      />
      <div>
        <PlayIcon className=" text-red-500 w-20 h-20 absolute z-20 play-ic" />
      </div>
    </Link>
  );
};

export default Card;
