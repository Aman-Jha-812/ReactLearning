import { useState } from "react";
import "./App.css";

function App() {
  
  const [gender, setGender] = useState('other');

  const genders = ["male","female","other"];
  genders.map((item)=>{
console.log(item)
  })

  return (
    <>

      {genders.map((item)=>{
          return (
          <label htmlFor={item}>
        <input type="radio" id={item} name="gender"
        value={item}
        checked={gender === item}
        onChange={(e)=>setGender(e.target.value)}
        />
        {item}
      </label>)
  })
}
      
    </>
  );
}

export default App;
