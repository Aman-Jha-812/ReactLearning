import { useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState("");

  const fruit = ["apple","banana","blackberry","Avacado"];

  console.log(fruits);

  return (
    <div className="select-none">
      <select
        defaultValue={fruits}
        onChange={(e) => {
          setFruits(e.target.value);
        }}
      >
        <option value="">---Select below---</option>
        {fruit.map((item)=>{
          return(
            <option key={item} value={item}>{item}</option>
          )
          
        })}
        
      </select>
    </div>
  );
}

export default App;
