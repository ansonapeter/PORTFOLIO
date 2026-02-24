import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="port">Portfolio</div>
      <ul className="nav-link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;