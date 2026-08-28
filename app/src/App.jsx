import { useState } from "react";
import "./App.css";
//import Navu from "./Navbar";
// function Components2(){
//   return(
//     <><div>
//       <img src="https://imgs.search.brave.com/bw9681a4hJPQTn_wOwJlM9ku7NDNiFiMEtzrRPCH_jE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNWEwZmNk/YzYtMmQzMC00MTFh/LWJlMzgtMWQxYzBm/NmFiYzNiL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NTI3MzUz/MDc0MDMwMDAw" alt="" />
//       </div>
//     </>
//   )
// }

// function Components(){
//   return(
//     <>
//     <div><h1>hii this is aman</h1>
//     <Components2/>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed a nesciunt eligendi earum explicabo quisquam accusantium eum maxime ipsam sapiente cumque sint accusamus placeat, mollitia aliquam? Hic nihil impedit quaerat illum optio minus nobis, soluta numquam ipsa, perspiciatis dolorum atque repellendus! Ea nobis modi deleniti, veniam quisquam voluptate nisi?</p>

//     </div>
//     </>
//   )
// }


const App = () => {
  const [count, setCount] = useState(0)
  function increment (){
    setCount(count+1)
  } 
  return (
    <>
      <div>
        <button onClick={increment}>Increnent</button>
        {count}

      </div>

      {/* <Navu title="Aman" name="Aman Kumar Jha"link = "github.com"/>
      <Navu link ="google.com"/>
      <Navu number ={8}/>         */}
    </>    
  );
};

export default App;
// export default Components;
