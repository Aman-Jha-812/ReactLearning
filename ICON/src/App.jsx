
import { IoMdHome } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import { Ri4kFill,RiAddLargeLine } from "react-icons/ri";
import './App.css'

function App() {
  

  return (
    <>
      <h1>ICON</h1>
      <IoMdHome/>
      <TiHome/>
      <IoIosLogOut />
      <Ri4kFill className='text-yellow-300 text-7xl'/>
      <RiAddLargeLine  className='text-red-500 text-8xl'/>
    </>
  )
}

export default App
