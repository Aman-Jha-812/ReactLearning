 import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Popup from './Popup';

import './App.css'

function App() {
  const [popup, setPopup]= useState(false);
  const [editpopup, setEditPopup]= useState(false);

  return (
    <>
    <button className="btn-primary" onClick={()=>{
      setPopup(true);
    }}>Delete</button>

    <Popup popup={popup} setPopup={setPopup} title={'Delete'} discription={'Are you sure you want to delete this?'}/>


    <button className="btn-primary" onClick={()=>{
      setEditPopup(true);
    }}>Edit</button>

    <Popup popup={editpopup} setPopup={setEditPopup} title={'Edit'} discription={'Are you sure you want to edit'}/>

    
    </>
  )
}

export default App
