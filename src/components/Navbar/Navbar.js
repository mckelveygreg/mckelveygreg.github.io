import React from "react";
import './styles.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <a href="#landingPage">Home</a>
      <a href="#aboutPage">About</a>
      <a href="#projectsPage">Projects</a>
      <a href="#certificatesPage">Certificates</a>
    </nav>
  );
};

export default Navbar;