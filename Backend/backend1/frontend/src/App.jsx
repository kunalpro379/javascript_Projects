import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
<h1>Chai Aur FullStack</h1>
<p>JOKES: {jokes.length}</p>{
jokes.map((joke, index)=>(
  <div key={joke.id}>
<h2>{joke.title}</h2>
<h3>{joke.content}</h3>  </div>
))
}
    </>
  )
}

export default App
