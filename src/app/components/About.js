'use client';

import React from 'react';
import Image from 'next/image';
import InteractiveImage from './InteractiveImage'; // Import the Client Component
import styles from '../styles/about.module.css';

function About() {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.aboutSection}>
      <section id="about">
        <div className={styles.textBox}>
          <p className={styles.section__text__p1}>Get to know more</p>
          <h1 className={styles.title}>About me</h1>
        </div>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutDetailsContainer}>
            <div className={styles.aboutContainers}>
              <div className={styles.detailsContainer}>
                <Image
                  src="/images/experience.png"
                  alt="Experience icon"
                  className={styles.icon}
                  width={64}
                  height={64}
                />
                <h3>Experience</h3>
                <p>2+ years Software development</p>
              </div>
              <div className={styles.detailsContainer} onClick={() => handleIconClick('https://www.uio.no/studier/program/inf-design/')}>
                <Image
                  src="/images/education.png"
                  alt="Education icon"
                  className={styles.icon}
                  width={64}
                  height={64}
                />
                <h3>Education</h3>
                <p>
                  2nd year of B.Sc Bachelors degree Informatics: Design, Use and Interaction
                  University of Oslo
                </p>
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
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
