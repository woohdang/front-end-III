import React from 'react';
import styles from './Faqs.module.scss';
import { Link } from 'react-router-dom';
import info from './info.js';

const Faqs = () => {

  return (
    <div className={styles['mainFaqs']}>
      <h1>Faqs</h1>
      <ol>
        {info.map(pregunta => (
          <Link key={pregunta.id} to={`${pregunta.id}`}>
            <li className={styles['question']}>
              {pregunta.title}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export default Faqs;
