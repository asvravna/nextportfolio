'use client';

import React from 'react';
import Image from 'next/image';

function Profile() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="profileSection"> 
            <section id="profile"> 
                <div className="sectionPicContainer">
                <Image
                    src="/images/about-pic.jpg"
                    alt="About Picture"
                    width={800} /* Adjust width as needed */
                    height={600} /* Adjust height to maintain aspect ratio */
                    className="aboutPic"
                    priority
                    />
                </div>
                <div className="sectionText">
                    <p className="sectionTextP1">Hello I&apos;m</p>
                    <h1 className="profileTitle">Anna Sofie Vylka Ravna</h1>
                    <p className="sectionTextP1">Developer &amp; UX-designer</p>
                    <div className="btnContainer">
                        <button className="btn3"
                            onClick={() => openInNewTab('./images/CV.pdf')}
                        >
                            Download CV
                        </button>
                        <button className="btn3"
                            onClick={() => (window.location.href = './#contact')}
                        >
                            Contact info
                        </button>
                    </div>
                    <div id="socialsContainer">
                        <Image
                            src="/images/linkedin.png"
                            alt="My LinkedIn profile"
                            className="icon"
                            width={32} 
                            height={32} 
                            onClick={() => openInNewTab('https://www.linkedin.com/in/anna-sofie-vylka-ravna-2849ba284/')}
                        />
                        <Image
                            src="/images/github.png"
                            alt="My GitHub profile"
                            className="icon"
                            width={32} // Set appropriate width
                            height={32} // Set appropriate height
                            onClick={() => openInNewTab('https://github.com/asvravna')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
