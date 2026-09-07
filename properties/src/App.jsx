import "./App.css";
import Components from './components/Comp.jsx'
// import Layout from "./components/Layout";
// import Button from './components/Button.jsx'

// import { Card, Info } from "./components/Card.jsx";
function App() {

  // const obj ={
  //   title:"TCS",
  //   year:2012
  // }

  // function button1click(){
  //   console.log("butoon 1 click hua hai")
  // }
  // function button2click(){
  //   console.log("butoon 2 click hua hai")
  // }

  return (
    <>
    {/* <h1>hsjfksfs</h1> */}
      <div className="layout">
        {/* <h1>hii this is </h1> */}
        {/* <Card name="Aman kumar jha" age={21} /> */}
        {/* <Info name={"Varsha"} age={20} />
        <Info name={"Adarsh"} age={21} />
        <Card name={"aditya"} age={18} /> */}
        {/* <Card data={obj} />
        <Info name="Tata cunseltency of service" data ={obj}/> */}

        
      </div>

      {/* <div className="button">
        <Button  title={'click Me'} func={button1click}/>
        <Button  title={'login'} func={button2click}/>
      </div> */}


      {/* <Layout title={'aman'}> 

        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt quidem id molestias adipisci molestiae ut cumque consequatur? Nostrum, facere!</p>

      </Layout> */}

        <Components />

    </>
  );
}

export default App;
