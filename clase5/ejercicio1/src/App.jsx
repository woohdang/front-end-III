import { useState } from 'react';
import './App.css';
import cincoDeOroImage from './assets/5.png'; // Cambia la ruta a la imagen descargada

function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [nuevosValores, setNuevosValores] = useState([]);

  const manejadorDeMensaje = () => {
    const nuevoValor = Math.floor(Math.random() * 45) + 1; // Generar número aleatorio entre 1 y 45
    setCount(nuevoValor);

    if (nuevoValor !== 0) {
      setMensaje(`Número seleccionado: ${nuevoValor}`);
    } else {
      setMensaje('');
    }
    setNuevosValores([...nuevosValores, nuevoValor]);
  };

  return (
    <>
      <div>
        <a>
          <img src={cincoDeOroImage} className='logo' alt="5deOrologo" />
        </a>
      </div>
      <h1>5 de Oro Revancha</h1>
      <div className="card">
        <button onClick={manejadorDeMensaje}>Armá tu jugada</button>
        <p>{mensaje}</p>
        <div className="cajaNumeroContainer">
          {nuevosValores.map((valor, index) => (
            <div key={index} className="cajaNumero">
              {valor}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

























/*import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [nuevosValores, setNuevosValores] = useState([]);

  const manejadorDeMensaje = () => {
    const nuevoValor = count + 1;
    setCount(nuevoValor);

    if (nuevoValor !== 0) {
      setMensaje(`Se guardó: ${nuevoValor}`);
    } else {
      setMensaje('');
    }
    setNuevosValores([...nuevosValores, nuevoValor]);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={manejadorDeMensaje}>Incrementar Contador</button>
        <p>{mensaje}</p>
        {nuevosValores.map((valor, index) => (
          <p key={index}>Nuevo valor guardado: {valor}</p>
        ))}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;*/
