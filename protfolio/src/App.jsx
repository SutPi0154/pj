import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import Path from "./routes/Path";

const App = () => {
  return (
    <div className=" w-[80%] mx-auto">
      <Navbar />
      {/* <Path /> */}
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default App;
