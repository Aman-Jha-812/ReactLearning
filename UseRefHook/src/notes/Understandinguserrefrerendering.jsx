import "./App.css";
import {useEffect, useRef, useState} from 'react'
function App() {
  const [count, setCount]=useState(0);
  const countRef = useRef(0)

  function handleIncrement(){
    // setCount(count+1)
    countRef.current +=1;
    console.log(countRef.current)
  }

  useEffect(()=>{
    console.log("re render hua hai")
  })
 
  return (
    <div className="container">
      <h1>{count}</h1>

      <button className="btn btn-primary" onClick={handleIncrement}>increase</button>
    </div>
  );
}

export default App;
