
import Button from "./Button";

const Header = () => {
  return (
    <>
    <div className="bg-red-300 py-5">
        <header className="max-w-[60rem] flex items-center justify-between text-xl text-black/80 m-auto">

          <h1 className="text-3xl">
            <span className="font-extrabold text-[tomato] ">B</span>rand</h1>

          <div className="flex items-center gap-7">
            <a href="">Features</a>
            <a href="">use Cases</a>
            <a href="">Integrations</a>
            <a href="">About us</a>
          </div>

          <Button title="Join Us"/>
        </header>
      </div>
      
    </>
  )
}

export default Header
