import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../index.css";
import { PlayIcon } from "@heroicons/react/24/solid";

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const response =
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f8592b7dec1e8dd83f420cc1dfbd45a&language=en-US
    `);
    const data = await response.json();
    setMovieDetail(data);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <>
      <div className="  w-full h-screen ">
        <div className=" relative h-[50%]">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`}
            alt=""
            className=" w-full h-[100%] object-cover"
          />
          <div className=" dark-ov"></div>
        </div>
        <div className=" absolute detail-container w-[60%] mx-auto p-4 flex justify-center items-start">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`}
            alt=""
            className=" rounded-md w-52"
          />
          <div className=" ml-4 text-white ">
            <h1 className=" text-4xl font-semibold">
              {movieDetail?.original_title}
             </h1>
            <p className=" text-lg my-1">{movieDetail?.overview}</p>
            <p className=" text-lg">
              <span className=" text-red-500 font-semibold">Release :</span>{" "}
              {movieDetail?.release_date} 
            </p>
            <p className=" text-lg">
              <span className=" text-red-500 font-semibold">Runtime :</span>{" "}
              {movieDetail?.runtime} min
            </p>
            <div className=" mb-5 mt-1 gap-2 flex ">
              
              {movieDetail?.genres?.map((g) => (
                <p
                  key={g?.id}
                  className=" gap-2 bg-red-500 rounded-md px-4 py-1 font-bold"
                >
                  {g?.name}
                </p>
              ))}
            </div>
            <Link
              className=" mt-3   border-2 border-red-500 text-lg font-bold py-2 my-2 px-5 w-48 text-white rounded-md"
              to={movieDetail?.homepage}
            >
              Watch Now
              <PlayIcon className=" text-red-500 w-5 h-5 inline-block ml-2 -ic" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
