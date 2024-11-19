import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-80}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-80}>About</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-80}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-80}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
