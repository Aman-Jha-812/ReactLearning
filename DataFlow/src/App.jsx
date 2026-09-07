import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import './App.css'
import { useState } from 'react'
function App() {

function kabutar (data){
  console.log(data)

  }
  
  const [data, setData]= useState('Aman Kumar Jha')
  console.log(data)
  return (
    <div className='gap-5'>
     <Header data={data} func={kabutar}/>
     <Layout   data={data} />
     <Footer  data={data} />
    </div>
  )
}

export default App
