import React from "react";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import PopularPage from "../pages/PopularPage";
import Upcoming from "../pages/Upcoming";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

const Main = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<PopularPage />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:title" element={<Search />} />
        <Route path="*" element={<PopularPage />} />
      </Routes>
    </>
  );
};

export default Main;
