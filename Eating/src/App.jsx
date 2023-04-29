import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Review from "./components/Review";
import Navbar from "./components/src/Navbar";
import Footer from "./components/src/Footer";
import About from "./components/src/About";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className=" container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <Navbar />
      <Hero />
      <Popular />
      <About />
      <Product />
      <Ask />
      <Review />
      <Mobile />

      <Footer /> */}
      <Footer />
    </div>
  );
};

export default App;
