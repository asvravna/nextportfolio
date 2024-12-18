'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav id="desktop-nav">
          <p className="Logo_text"> A. S.</p>
          <Image
            src="/images/logo3.webp" // Logo image path
            alt="Logo"
            width={700} // Set desired width
            height={100} // Set desired height
            className="logoimg"
            priority // Add the "priority" prop to improve LCP
          />

          <p className="Logo_text"> Ravna </p>

          {/* Hamburger Icon for Mobile */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar-elements">
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#this-website">This website</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
