
import { useState } from 'react';
import './App.css'

const Controlled = () => {
   const[state, setState]=useState('');

   
  
    return (
      <>
        <input type="text" value={state} placeholder='Enter Name' onChange={(e)=>{
            setState(e.target.value)
        }} />
        <button onClick={()=>{setState('')}}> Reset</button>
  
  <h1>{state}</h1>
      </>
    )
}

export default Controlled
