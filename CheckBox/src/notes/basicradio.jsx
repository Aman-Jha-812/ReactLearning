import { useState } from "react";
import "./App.css";

function App() {
  
  const [gender, setGender] = useState('other');
console.log(gender)
  return (
    <>
      <label htmlFor="male">
        <input type="radio" id="male" name="gender"
        value={"male"}
        checked={gender==="male"}
        onChange={(e)=>setGender(e.target.value)}
        />
        Male
      </label>
      <br />      
      <label htmlFor="female">
        <input type="radio" id="female" name="gender"
        value={"female"}
        checked={gender==="female"}
        onChange={(e)=>setGender(e.target.value)}
        />
        Female
      </label>
      <br />
      <label htmlFor="other">
        <input type="radio" id="other" name="gender"
        checked={gender==="other"}
        value={"other"}
        onChange={(e)=>setGender(e.target.value)}
        />
        other
      </label>

    </>
  );
}

export default App;
