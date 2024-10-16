import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
