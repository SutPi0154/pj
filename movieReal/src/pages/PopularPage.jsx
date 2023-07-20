import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

const PopularPage = () => {
  return (
    <>
      <Header />
      <CardContainer
        title={"Popular Now"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=3f8592b7dec1e8dd83f420cc1dfbd45a&language=en-US"
        }
      />
    </>
  );
};

export default PopularPage;
