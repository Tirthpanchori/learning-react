import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addvalue = () => {
    //console.log("Value added,",counter);
    if (counter < 20) {
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
    }
    
  }

  const removevalue = () => {
    //console.log("Value removed, ",counter);
    if (counter > 0)
    setCounter(counter - 1);
  }
  return (
    <>
      
      <h1>A simple counter program</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addvalue}> Increment value</button>
      <br />
      <button onClick = {removevalue}>Decrement value</button>
    </>
  )
}

export default App
