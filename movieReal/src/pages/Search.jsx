import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const [searchMovie, setSearchMovie] = useState([]);

  const { title } = useParams();
  const getSearchMovie = async () => {
    const response =
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3f8592b7dec1e8dd83f420cc1dfbd45a&language=en-US&query=${title}&page=1&include_adult=false
    `);
    const data = await response.json();
    setSearchMovie(data?.results);
  };
  useEffect(() => {
    getSearchMovie();
  }, [title]);


  return (
    <>
      <section className=" px-3 my-10">
        <h1 className=" text-2xl text-mono font-bold text-white">
          Search results for "{title}"
        </h1>
        <div className=" grid grid-cols-10 gap-3 mt-4">
          {searchMovie?.map((movie) => (
            <Card key={movie?.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
