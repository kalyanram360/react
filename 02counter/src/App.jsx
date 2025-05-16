import { useState } from 'react' // hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)
  
  // let counter = 55
  const addValue = () => {
    //counter += 1
    setCounter(counter + 1)

  }

  const subtractValue = () => {
    //counter -= 1
    if(counter>0){
    setCounter(counter - 1)}
  }

  return (
    <>
      <h1>Chai our React</h1>
      <h2>counter value: {counter} </h2>
      <button
      onClick={addValue} >Add value</button>
      <button
      onClick = {subtractValue}>Subtract value</button>
    </>
  )
}

export default App
