import { Component } from "react";
import "./App.css";
import Card from "./ClassComponents/Card";

//functional based components we use in the modern java script

// function Square(props){
//   return (
//     <div className="square">
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   )
// }

// class based components

// class Square extends Component{
//   render(){
//   return (
//     <div className="square">
//       <h1>{this.props.name}</h1>
//       <h1>{this.props.age}</h1>
//     </div>
//   )
// }
// }

function App() {
  return (
    <div className="grid">
      {/* <h1>hii this is components class.</h1> */}
      {/* <Square name="Aman" age ={22}/> */}
      <Card title="Aditya" description="hii this is Aditya kumar jha" />
      <Card title="Aman" description="hii this is Aman kumar jha" />
      <Card title="Ayush" description="hii this is Ayush kumar jha" />
    </div>
  );
}

export default App;
