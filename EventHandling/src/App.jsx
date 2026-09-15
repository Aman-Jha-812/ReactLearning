// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "./App.css";

function App() {
  // function testing (event){
  //   console.log(event.target.value)
  // } // Accesing event object

  // function testing1(name){
  //   console.log(name)
  //   console.log("how are you")
  // }

  // function submit(event){
  //   event.preventDefault();
  //   console.log("form submit");
  // }

  // function parentHandler() {
  //   console.log("parent pe click hua");
  // }
  // function childHandler(e) {
  //   e.stopPropagation(); // stop propagation karwa rahe hain pe
  //   console.log("child pe click hua");
  // }

  return (
    <>
      {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-20 h-20 rounded transition duration-200" onClick={()=>{
        alert("hii this is aman");
      }}>btn</button>

      <input type="text" placeholder='Enter your name' onChange={()=>{
        console.log("input changed")
      }}     className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition" /> */}

      {/* <button onClick={testing}>Click Me</button> */}

      {/* <input onChange={testing} type="text" placeholder='Enter Your Name' /> */}

      {/* <button onClick={()=>{testing1("aman")}}>Click</button>  */}

      {/* <form onSubmit={submit} action="">
        <input type="text" placeholder='Enter name'/>
        <button type='submit'>Submit</button>
      </form> */}

      {/* <div onClick={parentHandler}>
        parent Click
        <button onClick={childHandler}>child click</button>
      </div> */}
    </>
  );
}

export default App;
