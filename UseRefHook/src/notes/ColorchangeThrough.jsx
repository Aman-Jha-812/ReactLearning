import "./App.css";
import {useRef} from 'react'
function App() {
  const divRef = useRef()
  const handleClick=()=>{
    divRef.current.style.backgroundColor = "blue"
    divRef.current.style.borderRadius = "100%"
  }
  return (
    <div className="container">
      <div ref={divRef} className="bg-red-500 w-20 h-20"></div>

      <button className="btn btn-primary" onClick={handleClick}>Focus</button>
    </div>
  );
}

export default App;
