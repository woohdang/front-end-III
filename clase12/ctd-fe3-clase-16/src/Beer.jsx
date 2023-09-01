import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BeerFinder from './BeerFinder'; 
import './index.css';
import styles from './Beer.module.scss'; 

const Beer = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]); 
  const navigate = useNavigate();

  const getBeers = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=27`);
    const data = await res.json();
    setBeers(data);
    setFilteredBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const handleSearch = (searchId) => {
    if (searchId) {
      const filtered = beers.filter((beer) => beer.id.toString() === searchId);
      setFilteredBeers(filtered);
    } else {
      setFilteredBeers(beers);
    }
  };

  return (
    <div className='beer-center'>
      <BeerFinder onSearch={handleSearch} /> 
      <div className='beer-details'>
        <div className={`beer-grid ${filteredBeers.length === 1 ? styles['beer-grid'] : ''}`}>
          {filteredBeers.slice(0, 27).map((beer) => (
            <div key={beer.id} className='beer-card'>
              <h2 className='title'>Cerveza número {beer.id}</h2>
              <div className='card'>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='footer'>
         <button onClick={goBack}>Go back</button>
      </div>
    </div>
  );
};

export default Beer;


