'use client';

import React from 'react';
import Image from 'next/image';

function Contact(){
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="contact-section">
            <section id="contact">
                <p className="section__text__p1"> Get in touch</p>
                <h1 className="title"> Contact me</h1>
                <div className="contactContainer">
                    <div className="contact-info-container">
                        <Image 
                            src="/images/linkedin.png"
                            alt="LinkedIn icon"
                            width={40}
                            height={40}
                            className="contact-icon"
                        />
                        <p><a onClick={() => openInNewTab('https://www.linkedin.com/in/anna-sofie-vylka-ravna-2849ba284/')}>
                            LinkedIn
                        </a></p>
                    </div>
                    <div className="contact-info-container">
                        <Image 
                            src="/images/email.png"
                            alt="Email icon"
                            width={50}
                            height={50}
                            className="contact-icon"
                        />
                        <p><a href="mailto:ansvravna@gmail.com">ansvravna@gmail.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
