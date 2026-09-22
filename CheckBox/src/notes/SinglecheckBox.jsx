import { useState } from 'react'

import './App.css'

function App() {
  const [IsChecked, setIsChecked] = useState(true)

  console.log(IsChecked);

  function onchange(e){
    setIsChecked(e.target.checked)
  }
  return (
    <>
      <label htmlFor="ch">
        
        <input 
        type="checkbox" 
        id='ch'
        checked = {IsChecked}
        onChange={onchange}
        />
        Terms and condition
      </label>
    </>
  )
}

export default App
