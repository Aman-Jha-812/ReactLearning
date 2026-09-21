
import { useState } from 'react'
import './App.css'

function App() {
 
  const[data,setData]=useState({
    name:"",
    email:"",
    phone:""
  })
 
function inputHandler(e){
const{name,value}= e.target;
setData({...data , [name]:value}) 

}


  return (
    <>
      <input
      type="text"
      name='name'
      value={data.name}
      placeholder='Name'
      onChange={inputHandler}
      />

      <br /><br />

      <input      
      type="email"
      name='email'
      value={data.email}
      placeholder='email'
      onChange={inputHandler}
      />

      <br /><br />

      <input      
      type="number"
      name='phone'
      value={data.phone}
      placeholder='enter your phone'
      onChange={inputHandler}
      />

      <button onClick={()=>{
        setData({
          name:"",
          email:"",
          phone:""
        })
      }}>Clear</button>

      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </>
  )
}

export default App
