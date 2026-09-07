//import React from 'react'
import { useState } from 'react';

function Card() {
  const [count, setCount] = useState(0)
  

function Increment (){
    //setCount(count+1)
    // setCount(function(prev){
    //     return prev+1;
    // })
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)// its give only one increment mease 0 to 1 when you click on increment button 

    setCount(prev=>prev+1)//best way 
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1) // but its give you answew 4 when you clik ones . That way it's better approach of rerendering
 }


  return (
    
      <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      </>
  )
}

export default Card