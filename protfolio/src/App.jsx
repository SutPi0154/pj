// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./pages/Hero";
// import About from "./pages/About";
// import Services from "./pages/Services";

// const App = () => {
//   return (
//     <div className="">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import { Collapse, Text, Button } from "@mantine/core";

function App() {
  const [activeCollapse, setActiveCollapse] = useState(null);

  const toggleCollapse = (index) => {
    if (activeCollapse === index) {
      setActiveCollapse(null);
    } else {
      setActiveCollapse(index);
    }
  };

  return (
    <div>
      <Button onClick={() => toggleCollapse(1)}>Toggle Collapse 1</Button>
      <Collapse in={activeCollapse === 1}>
        <Text>This is the content for collapse 1.</Text>
      </Collapse>

      <Button onClick={() => toggleCollapse(2)}>Toggle Collapse 2</Button>
      <Collapse in={activeCollapse === 2}>
        <Text>This is the content for collapse 2.</Text>
      </Collapse>

      <Button onClick={() => toggleCollapse(3)}>Toggle Collapse 3</Button>
      <Collapse in={activeCollapse === 3}>
        <Text>This is the content for collapse 3.</Text>
      </Collapse>
    </div>
  );
}

export default App;
