// src/pages/index.js
import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
