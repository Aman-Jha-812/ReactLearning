
import { useState } from 'react';
import './App.css';
import Button from './components/Button'
function App() {
  let [count, setCount] = useState(0)
  function increment (){
      setCount(count+1)
  }
  const decrement = ()=>{
    setCount((count-1))

  }
  const reset = ()=>{
    setCount(0)
  }

  return (
  <>
    <div>
      <h1>COUNTER APP</h1>
      <p>counter : {count}</p>

    <div className="className">
      {/* <button onClick={increment}>➕INCREMENT</button>
      <button onClick={decrement}>➖DECREMENT</button>
      <button onClick={reset}>🔄️RESET</button> */}
      
      <Button text="Increment" func={increment}/>
      <Button text="Decrement" func={decrement}/>
      <Button text="Reset" func={reset}/>
    </div>
    </div>
  </>
  )
}


export default App
