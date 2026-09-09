import { useState } from 'react'
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";
import "./App.css";

function App() {
  const color = ["pink", "blue", "red", "lightseagreen","tomato", "aqua"];

  const [selectedColor, setSelectedColor]= useState('transparent')

  return (
    <>
      <h1>🎨Color Switcher</h1>
    <div className="flex justify-center gap-4 ">
      {
        color.map((item)=>{
          return(
            <Button key={item} color={item}setSelectedColor={setSelectedColor}
            > 
            
              {item}
            </Button>
          )
        })
      }      
     </div>
     <div className="flex justify-center p-10">
     <ColorBox color={selectedColor}/>

     </div>
    </>
  );
}

export default App;
