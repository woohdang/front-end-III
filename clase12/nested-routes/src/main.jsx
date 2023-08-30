import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Faqs from './Faqs'
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='faqs' element={<Faqs/>} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)

