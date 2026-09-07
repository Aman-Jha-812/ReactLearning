import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const[decVal,setDecVal]=useState(0)
  useEffect(()=>{
    //side effect code here
    console.log("hello me useeffect hook ke andar hoon")
    return ()=>{
      // cleanup code (optional)
    }
  },[count]) //dependencies

 function Increment() {
  setCount(prev=>prev+1)
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>

      <h2>{decVal}</h2>
      <button onClick={()=>{
      setDecVal(prev=>prev-1)
      }}>Decrement</button>
    </>
  )
}

export default App
