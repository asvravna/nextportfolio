'use client';

import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects-section">
      <section id="projects">
        <div className="centeredContainer">
          <p className="section__text__pp1">Browse my recent</p>
          <h1 className="title_for_projects">Projects</h1>
        </div>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="projectContainer">
              <div className="article-container">
              <h3 className="project-title-number">Project 1</h3>
                <Image
                  src="/images/ferdig-prototype.png"
                  width={300}
                  height={300}
                  alt="project-1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">20/20 Vision</h2>
              <p className="projects__description">
                "20/20 Vision" is a tangible artifact developed with a participatory design-approach. With screen-time regulation functionality to reduce Computer Vision Syndrome and eye-strain caused by prolonged, monotonous computer use. As well as contributing to an overall enhanced working-environment for computer users, via regular breaks, focus-sessions and positive reinforcement.
              </p>
              <div className="btn-container">
                <button
                  className="btn3"
                  onClick={() => openInNewTab('https://www.uio.no/studier/emner/matnat/ifi/IN1060/v24/prosjektgrupper/artifakt/')}
                >
                  Project page
                </button>
                <button
                  className="btn3"
                  onClick={() => openInNewTab('https://www.youtube.com/watch?v=WG1hPkSvW0Y')}
                >
                  Video
                </button>
              </div>
            </div>
            <div className="projectContainer">
              <div className="article-container">
              <h3 className="project-title-number">Project 2</h3>
                <Image
                  src='/images/project-2.jpg'
                  width={300}
                  height={300}
                  alt="project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">BeskyttBevis</h2>
              <p className="projects__description">
                An application for encrypted storage of critical information for people in abusive relationships. Developed to help victims get better help from lawyers and institutions that need information and evidence in order to support them in cases of violence or abuse. Our finished project from Oslo Legal Hackathon 2024.
              </p>
              <div className="btn-container">
                <button
                  className="btn3"
                  onClick={() => openInNewTab('https://www.figma.com/proto/X1zN7miZLB6TZEGkxvIIsu/BeskyttBevis?node-id=1-30&starting-point-node-id=1%3A30&t=55pJw4rVdWrHex9F-1')}
                >
                  Live Demo
                </button>
                <button
                  className="btn3"
                  onClick={() => openInNewTab('./images/Diplom Anna Ravna.pdf')}
                >
                  Diploma
                </button>
              </div>
            </div>
            <div className="projectContainer">
              <div className="article-container">
              <h3 className="project-title-number">Project 3</h3>

                <Image
                  src='/images/project-1.png'
                  width={300}
                  height={300}
                  alt="project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Embark</h2>
              <p className="projects__description">
                An application and a prototype for a voice-user-interface developed from working with dog owners in Oslo. The idea for the app is to assist dog owners in finding suitable places to walk their dog based on environmental factors such as road-salting, temperature, traffic, noise and parks/green areas.
              </p>
              <div className="btn-container">
                <button
                  className="btn3"
                  onClick={() => openInNewTab('https://www.figma.com/proto/va5i7v3bMuGhEVSSQQ5C1H/Wireframe-oblig-3?node-id=34-2&node-type=CANVAS&t=vO9Kjlck7YwwUxjS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A2')}
                >
                  Live Demo
                </button>
                <button
                  className="btn3"
                  onClick={() => openInNewTab('https://www.figma.com/board/txWby9CIWwnzXR9ch7sp9A/Prototyping-Embark?node-id=1-143&t=GMaepl7YYC5wLWvL-1')}
                >
                  Prototyping process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="this-website">
        <div className="this-website">
          <div className="projectContainer">
            <h2 className="experience-sub-title project-title">This website</h2>
            <p className="projects__description">
              Developed using Next.js.
            </p>
            <button
                className="btn3"
                onClick={() => openInNewTab('https://github.com/asvravna/nextportfolio')}
                >
                Source code
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
