// import React from 'react'
// impot axios from 'axios'
//import {useState} from 'react'; //import hooks
import './App.css'
import Header from '../Components/Header' // in export import mainly use capital lat (default import)
import { Card,Card2 } from '../Components/Header'//named export

import reactLogo from  './assets/react.svg'

import Sum from './Utilities.js'; //import function/modules from Utilities.js

import data from './data.json';//import data from json
const App = () => {
  let result=Sum(10,20);
      console.log(result);

      console.log(data)  // show data in console from data.json file
    
  return (
    <>
    <div className='aman'>
      <h1>App</h1>
      <Header/>
      <Card />
      <Card2 />
    </div>
    <img src={reactLogo} alt="hai" />

    
    </>
  )
}

export default App
