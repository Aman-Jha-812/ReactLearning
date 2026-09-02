// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import React from "react";
import "./App.css";

function App() {
  let name = "Aman kumar jha";
  //let age = 19;

  // function greet(){
  // return "My age is 22."
  // }

  // let arr = ['iron man','Captain America', 'thor','black panther'];

  return (
    <>
      {/* <h1>{name} {greet()}</h1> */}
      {/* <h1>{age>18?'You can drive':'You can not drive'}</h1> */}
      <div>
        {/* <h1 style={{
  // backgroundColor:'red',
  "backgroundColor":'red',  
  fontSize:'20px',  
}}>Hello Style</h1>

{age>18? <p style={{
  color:'green'
}}>you can drive</p> : <p style={{
  color:'red'
}}>you can not drive</p> } */}

        {/* {true && <p>Rare paragraph</p>} */}

        {/* {arr.map(function(item,index){
            return <h1 key={index}>{item}</h1>
        })} */}

        {/* <h1>Hello how are you</h1> */}
        {/* {React.createElement('h1',null, 'hello how are you')} // it is inside compile  */}

        {/* <h1 className="heading">Hello</h1> */}
        {/* {React.createElement(
          "h1",
          {
            className: "heading",
            style: {
              color: "pink",
            },
          },
          "hello",
        )} */}
      </div>
      {/* <div>
        <p>Hello</p>
      </div> */}
      {/* {React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          {
            style: {
              color: "green",
            },
          },
          "hello",
        ),
      )} */}

      {/* <h1>My name is {name}</h1> */}

      {/* {React.createElement(
        "h1",
        null,
        //`My name is ${name}`,
        'My name is ',
        name
      )} */}

      
    </>
  );
}

export default App;
