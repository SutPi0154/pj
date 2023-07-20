import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";
import "../index.css";

const Header = () => {
  const [relativeMovie, setRelativeMovie] = useState([]);


  useEffect(() => {
    getRelativeMovie();
  }, []);
  const getRelativeMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=3f8592b7dec1e8dd83f420cc1dfbd45a&language=en-US`
    );
    const data = await response.json();
    setRelativeMovie(data?.results);
  };
  return (
    <section className=" ">
      <Splide
        options={{
          type: "loop",
          ariaLive: "polite",
          // pagination: "white",
          drag: true,
          paginationDirection: "ltr",
          autoplay: true,
          interval: 2000,
        }}
      >
        {relativeMovie?.map((movie) => (
          <SplideSlide key={movie?.id}>
            <HeaderCard movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Header;
