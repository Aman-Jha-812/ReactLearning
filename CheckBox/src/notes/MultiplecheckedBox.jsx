import { useState } from 'react'

import './App.css'

function App() {
  const [IsHtml, setIsHtml] = useState(true)
  const [IsCss, setIsCss] = useState(true)
  const [Isjs, setIsjs] = useState(true)

  

  
  return (
    <>
      <label htmlFor="html">
        
        <input 
        type="checkbox" 
        id='html'
        checked = {IsHtml}
        onChange={(e)=>setIsHtml(e.target.checked)}
        />
        html
      </label>

      <label htmlFor="css">
       
        <input 
        type="checkbox" 
        id='css'
        checked = {IsCss}
        onChange={(e)=>setIsCss(e.target.checked)}
        />
        css
      </label>

      <label htmlFor="js">
        <input 
        type="checkbox" 
        id='ch'
        checked = {Isjs}
        onChange={(e)=>setIsjs(e.target.checked)}
        /> Js
      </label>


      {IsHtml && "html checked"}
        <br /><br />
      {IsCss && 'css is checked'}
        <br /><br />
      {Isjs && 'js is checked'}
    </>
  )
}

export default App
