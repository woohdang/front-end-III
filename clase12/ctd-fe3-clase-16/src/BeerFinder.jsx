import React, { useState } from 'react';
import styles from './BeerFinder.module.scss';

const BeerFinder = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearchChange = (event) => {
    setSearchId(event.target.value);
    onSearch(event.target.value); 
  };

  return (
    <div className={styles['finder']}>
      <input 
        type='text'
        placeholder='Buscar por ID'
        value={searchId}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default BeerFinder;
