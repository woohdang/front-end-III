import React from 'react';
import image from './images/Faqs.png'
import styles from './Faqs.module.scss'

function Faqs() {
  return (
    <div className={styles['mainFaqs']}>
        <h1>From Faqs</h1>
        <img src={image} alt="Faqs" />
    </div>
  );
}

export default Faqs;