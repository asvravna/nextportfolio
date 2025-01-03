'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      if (navLinks && hamburger && !navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        setIsMenuOpen(false);  // Close menu if clicking outside
      }
    };

    // Add event listener when component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav id="desktop-nav">
          <p className="Logo_text"> A. S.</p>
          <Image
            src="/images/logo3.webp" 
            alt="Logo"
            width={700} 
            height={100} 
            className="logoimg"
            priority 
          />
          <p className="Logo_text"> Ravna </p>
           <div className={`hamburgerNav ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div> 
          <ul className={`navbar-elements ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#this-website">This website</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
