'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/contact.module.css'; 




function Contact(){
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="contact-section">
            <section id="contact">
                <p className="section__text__p1"> Get in touch</p>
                <h1 className="title"> Contact me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                    <Image src="/images/linkedin.png"
                            alt="LinkedIn icon"
                            height={100}
                            width={35}
                            className="icon contact-icon"
                        />
                    <p><a href="mailto:ansvravna@gmail.com"> ansvravna@gmail.com</a></
                    p>
                    </div>
                    <div className="contact-info-container">
                        <Image src="/images/email.png"
                            alt="LinkedIn icon"
                            height={100}
                            width={35}
                            className="icon contact-icon"
                        />
                    <p><a onClick={() => openInNewTab('https://www.linkedin.com/in/anna-sofie-vylka-ravna-2849ba284/')}> 
                    LinkedIn</a></
                    p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
