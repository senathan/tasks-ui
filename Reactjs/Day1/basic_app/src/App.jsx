import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <h1>welcome to react js</h1>
    <div className='app'>
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  
    
    </>
  )
}

export default App
