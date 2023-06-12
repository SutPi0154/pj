import { Container } from "@mantine/core";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import AddToCart from "./components/AddToCart";
import Search from "./components/Search";
import FilterCategory from "./components/FilterCategory";
import RouteGuard from "./components/RouteGuard";
import Detail from "./pages/Detail";
import "./App.css";

const App = () => {
 
  return (
    <Container size={"xl"}>
      <div>
      </div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
        <Route path="/filterCategory" element={<FilterCategory />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Products />} />
      </Routes>
    </Container>
  );
};

export default App;
