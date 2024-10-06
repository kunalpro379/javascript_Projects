import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addVal = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeVal = () => {
    setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
  }

  return (
    <>
      <h1>Kunal</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Counter: {counter}</p>
        <button onClick={addVal}>Add</button>
      </div>
      <button onClick={removeVal}>Subtract</button>

    </>
  )
}

export default App
