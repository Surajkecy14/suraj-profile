import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Suraj</Link>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
