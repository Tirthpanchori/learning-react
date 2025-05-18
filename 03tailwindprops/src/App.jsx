import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name: "Tirth",
    age: 21
  }

  let arr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-300 text-white rounded-xl p-6  mb-4'>Tirth here</h1>
      <Card name = "Sarthak" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card name = "Tirth" age = "18" />
    </>
  )
}

export default App
