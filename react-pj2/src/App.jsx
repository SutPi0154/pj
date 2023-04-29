import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
