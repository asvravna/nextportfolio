'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/profile.module.css'; 

function Profile() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles.profileSection}> 
            <section id="profile"> 
                <div className={styles.sectionPicContainer}>
                    <Image 
                        src="/images/about-pic.jpg"
                        alt="Anna Ravna profile picture"
                        className={styles.aboutPic}
                        width={1000} 
                        height={900}
                        layout="responsive" 
                    />
                </div>
                <div className={styles.sectionText}>
                    <p className={styles.sectionTextP1}>Hello I&apos;m</p>
                    <h1 className={styles.profileTitle}>Anna Sofie Vylka Ravna</h1>
                    <p className={styles.sectionTextP2}>Developer &amp; UX-designer</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn + ' ' + styles.btnColor2}
                            onClick={() => openInNewTab('/images/CV_english2.pdf')}
                        >
                            Download CV
                        </button>
                        <button className={styles.btn + ' ' + styles.btnColor2}
                            onClick={() => (window.location.href = './#contact')}
                        >
                            Contact info
                        </button>
                    </div>
                    <div id={styles.socialsContainer}>
                        <Image
                            src="/images/linkedin.png"
                            alt="My LinkedIn profile"
                            className={styles.icon}
                            width={32} // Set appropriate width
                            height={32} // Set appropriate height
                            onClick={() => openInNewTab('https://www.linkedin.com/in/anna-sofie-vylka-ravna-2849ba284/')}
                        />
                        <Image
                            src="/images/github.png"
                            alt="My GitHub profile"
                            className={styles.icon}
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
