

const Navbar = (obj) => {
    console.log(obj);
  return (
    <div>
      <h1>{obj.title}</h1>
      <h1>{obj.link}</h1>    
      <h1>{obj.number}</h1>          
    </div>
  )
}

export default Navbar
