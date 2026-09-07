//import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  

  // let [userData, setUser]= useState({
  //   name:"Aman",
  //   age:21,
  //   passion:'coding'
  // })
  // console.log(userData);

  let arr =[1,1,3,4,5];
 
  return (
    
      <>
      {arr.map((item,index)=>{
        return <Card key = {index}/>
      })}
      
      </>
  )
}

export default App
