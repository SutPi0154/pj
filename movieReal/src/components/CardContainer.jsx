import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = ({ title, url }) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const getPopularMovie = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPopularMovie(data?.results);
  };
  useEffect(() => {
    getPopularMovie();
  }, []);
  return (
    <section className=" px-3 my-10">
      <h1 className=" text-5xl text-mono font-bold text-white">{title} </h1>
      <div className=" grid grid-cols-10 gap-3 mt-4">
        {popularMovie?.map((movie) => (
          <Card key={movie?.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
