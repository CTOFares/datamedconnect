import { useState } from 'react'

import './App.css'
import Constraction from './Components/Constraction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Constraction/>
    </>
  )
}

export default App
