import { useState } from 'react'
import './App.css'
import TaqatForm from './components/TaqatForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaqatForm />
    </>
  )
}

export default App
