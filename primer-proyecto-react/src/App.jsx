import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <h1>Nicolás Lacave</h1>
      <h2>Frontend Developer</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador es {count}
        </button>
        <p>
          Aprendiendo a programar en React + Vite
        </p>
      </div>
      <p className="read-the-docs">
        Hacé click en los logos de Vite & React para leer la documentación
      </p>
    </>
  )
}

export default App
