'use client';

import React from 'react';
import Image from 'next/image';
// import InteractiveImage from './InteractiveImage'; // Import the Client Component

function About() {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="aboutSection">
      <section id="about">
        <div className="textBox">
          <div className="centeredContainer">
          <p className="sectionText">Get to know more</p>
          <h1 className="title">About me</h1>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="aboutDetailsContainer">
            <div className="aboutContainers">
              <div className="detailsContainer">
                <Image
                  src="/images/experience.png"
                  alt="Experience icon"
                  className="icon"
                  width={30}
                  height={30}
                />
                <h3>Experience</h3>
                <p>2+ years Software development</p>
              </div>
              <div className="education-container">
              <div className="detailsContainer" onClick={() => handleIconClick('https://www.uio.no/studier/program/inf-design/')}>
                <Image
                  src="/images/uio.png"
                  alt="Education icon"
                  className="icon"
                  width={30}
                  height={30}
                />
                <h3>Education</h3>
                <p>
                  2nd year of B.Sc Bachelors degree Informatics: Design, Use and Interaction
                  University of Oslo
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="textContainer">
            <p>
              I am a 22-year-old student from Tromsø, studying informatics at the University of Oslo.
              I am currently studying research methods in Human-Computer-Interaction, as well as how
              public services and legal systems can be automated to be more efficient. I have a great
              interest in software development, and I like working with both backend and frontend
              technologies.
            </p>
          </div>
        </div>
        {/* <InteractiveImage
          src="/images/arrow.png"
          alt="Arrow icon"
          className={`${styles.icon} ${styles.arrow}`}
          width={32}
          height={32}
          onClick={() => (window.location.href = './#experience')}
        /> */}
      </section>
    </div>
  );
}

export default About;
