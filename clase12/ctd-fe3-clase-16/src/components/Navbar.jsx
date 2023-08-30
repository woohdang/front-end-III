import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/beers.png';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
         <img className="logo" src={logo} alt="islogo'beer"/>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/beer/1">Beer Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

