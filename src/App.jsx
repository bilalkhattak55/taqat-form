import { useState } from 'react'
import './App.css'
import TaqatForm from './components/TaqatForm'
import { Button } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex justify-content-center align-items-center'>
    <TaqatForm />
    </div>
  )
}

export default App
