import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./PORTFOLIO/components/Navbar";
import Home from "./PORTFOLIO/components/Home";
import About from "./PORTFOLIO/components/About";
import Skills from "./PORTFOLIO/components/Skills";
import Project from "./PORTFOLIO/components/Project";
import Contact from "./PORTFOLIO/components/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;