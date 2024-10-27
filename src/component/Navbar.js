
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
              <i className="fas fa-chess-knight"></i> AURCT
            </a>
          </div>
          <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon" onClick={toggleMenu}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}
