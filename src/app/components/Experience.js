'use client';

import React from 'react';
import Image from 'next/image';




function Experience() {
    const expandDetail = (element) => {
        element.querySelector('.detail').classList.toggle('active');
    };

    const closeBox = (event, element) => {
        event.stopPropagation();
        element.parentElement.classList.remove('active');
    };

    return (
        <>
            <div className="experience-section">
                <section id="experience">
                    <div className="centeredContainer">
                        <p className="section__text__p1">Explore my</p>
                        <h1 className="title">Experience</h1>
                    </div>
                    <div className="experience-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <h2 className="experienceSubTitle">Design</h2>
                                <div className="article-container">
                                <article>
                                    <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                        <h3>Figma</h3>
                                        <p>Experienced</p>
                                        </div>
                                </article>
                                <article>
                                    <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                        <h3>Usability testing</h3>
                                        <p>Basic</p>
                                        </div>
                                </article>
                                {/* <article>
                                    <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                    <div>
                                        <h3>React</h3>
                                        <p>Basic</p>
                                    </div>
                                </article> */}
                                <article>
                                    <Image 
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                    <div>
                                        <h3>JavaScript, HTML, CSS</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                </div>  
                            </div>
                            <div className="details-container">
                            <h2 className="experienceSubTitle">Development</h2>
                            <div className="article-container">
                            <article>
                                    <Image 
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                            <h3>Git</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                            <h3>SQL-server</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                            <h3>Visual Studio</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                <article>
                                        <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                        <h3>Java</h3>
                                        <p>Experienced</p>
                                        </div>
                                </article>
                                <article>
                                        <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                        <h3>Python</h3>
                                        <p>Basic</p>
                                        </div>
                                </article>
                                <article>
                                        <Image
                                        src="/images/checkmark.png"
                                        height={100}
                                        width={35}
                                        alt="Experience icon"
                                        className="icon"
                                        />
                                        <div>
                                        <h3>.NET/C#</h3>
                                        <p>Intermediate</p>
                                        </div>
                                </article>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className="timeline-line"></div>
                        <div className="timeline-arrow"></div>
                        <div className="timeline-points">
                            <div
                                className="timeline-point"
                                style={{ left: '50%' }}
                                onClick={(e) => expandDetail(e.currentTarget)}
                            >
                                <div className="tooltip">
                                    Seasonal position at Statnett
                                </div>
                                <div className="detail">
                                    <div
                                        className="close-btn"
                                        onClick={(e) => closeBox(e, e.currentTarget)}
                                    >
                                        ✖
                                    </div>
                                    <h3>Surveillance and software development</h3>
                                    <h2>Statnett</h2>
                                    <p>From June 2024 - August 2024</p>
                                </div>
                            </div>
                            <div
                                className="timeline-point"
                                style={{ left: '70%' }}
                                onClick={(e) => expandDetail(e.currentTarget)}
                            >
                                <div className="tooltip">Crew member at JavaZone</div>
                                <div className="detail">
                                    <div
                                        className="close-btn"
                                        onClick={(e) => closeBox(e, e.currentTarget)}
                                    >
                                        ✖
                                    </div>
                                    <h3>Volunteer</h3>
                                    <h2>JavaZone</h2>
                                    <p>3rd - 5th of September 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-labels">
                        <h1 className="year-description start">2024</h1>
                        <h1 className="year-description end">2025</h1>
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Experience;
