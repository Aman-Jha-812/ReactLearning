import "./App.css";
import {useEffect, useRef, useState} from 'react'
function App() {
  const [randomNumber, setRandomNumber]=useState(0);
  const renderCountRef = useRef(0)

  function generateRandomNumber(){
    const no = Math.floor(Math.random()*100);
    setRandomNumber(no)
  }

  useEffect(()=>{
    console.log("re render triggers")
   renderCountRef.current += 1
  })
 
  return (
    <div className="container">
      <h1>Re-render Count:{renderCountRef.current}</h1>
      <h1>{randomNumber}</h1>
      <button className="btn btn-primary" onClick={generateRandomNumber}>Random Number</button>
    </div>
  );
}

export default App;
