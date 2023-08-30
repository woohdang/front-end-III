import React from 'react';
import image from './images/home.png'
import styles from'./Home.module.scss'

function Home() {
  return (
    <div className={styles['mainHome']}>
        <h1>From Home</h1>
        <img src={image} alt="Home" />
    </div>
    
  );
}

export default Home;