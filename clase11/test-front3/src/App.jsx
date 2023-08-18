import React, { useState } from 'react';
import Card from "./Card";
import './App.css';

function App() {
  const [banda, setBanda] = useState('');
  const [genero, setGenero] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isBandaValido = /^[^\s].{2,}$/.test(banda.trim());
    const isGeneroValido = genero.length >= 6;
  
    if (isBandaValido && isGeneroValido) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
      setSubmitted(false);
    }
  }

  if (submitted) {
    return <Card banda={banda} genero={genero} />;
  }
  
  return (
    <div className="App">
      
      <form className="form" onSubmit={handleSubmit}>
        <h2>Banda Favorita</h2>
        <input 
        className="campos" 
        type="text" 
        placeholder="Ingrese nombre de la Banda" 
        value={banda} onChange={(e) => setBanda(e.target.value)} 
        />
        <input 
        className="campos" 
        type="text" 
        placeholder="Ingrese Genero Musical" 
        value={genero} onChange={(e) => setGenero(e.target.value)} 
        />
        <button 
        type="submit">Enviar
        </button>
      </form>
      {error && <p className='error'>Por favor chequea que la información sea correcta</p>}
    </div>
  )
}

export default App;
