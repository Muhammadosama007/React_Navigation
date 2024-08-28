import "./App.css";
import { useState } from "react";
// import Home from "./Home";
// import Hello from "./Hello";
import Conversion from "./Conversion";
import AfterConversion from "./AfterConversion";
import State from "./State";
import ConditionalRendering from "./ConditionalRendering";
import Tabs from "./Tabs";
import UseEffect from "./UseEffect";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./ContactUS/Contact";
import { Route, Routes } from "react-router-dom";
import NoRoute from "./404/NoRoute";
import Mycart from "./MyCart/Mycart";
function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }

  // const [names, setNames] = useState(["sohaib", "Moiz ", "Ahmed", "Usama"]);

  return (
    <>
   <ConditionalRendering/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoRoute />} />
        <Route path="/cart" element={<Mycart />} />
      </Routes>
    </>
  );
}

export default App;
