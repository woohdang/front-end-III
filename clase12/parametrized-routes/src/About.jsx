import React from 'react';
import image from './images/about.png'
import styles from'./About.module.scss'

function About() {
  return (
    <div className={styles['mainAbout']}>
        <h1>From About</h1>
        <img src={image} alt="About" />
    </div>
  );
}

export default About;