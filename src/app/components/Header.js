import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css'; 


function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <nav id="desktop-nav">
          <p className="Logo_text_1"> A. S.</p>
          <Image
          src="/images/logo3.webp" // Update with your logo image path
          alt="Logo"
          width={700} // Set desired width
          height={100} // Set desired height
          className={styles.logoimg} // Apply custom styles
        />
          <p className="Logo_text_2"> Ravna </p>
          <div className="navbar-elements">
            <ul className="nav-links">
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
