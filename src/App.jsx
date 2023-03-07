import React, { useState } from 'react'
import './App.css';
//components
import { PortalComponent } from './Portal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Portal React!</h1>
      <PortalComponent />
    </>
  )
}

export default App
