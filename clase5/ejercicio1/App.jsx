import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mensaje, setMensaje] = useState('')
  const manejadorDeMensaje = () => {
    const nuevoValor = count +1;
    setCount(nuevoValor);

    if (nuevoValor === 1) {
      setMensaje('Se guardo Uno')
    } else if (nuevoValor === 2){
      setMensaje('Se guardo Dos')
    } else {
      setMensaje('');
    }
  }
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
        <button onClick={manejadorDeMensaje}>
          count is {count}
        </button>
        <p>{mensaje}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
