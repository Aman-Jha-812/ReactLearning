import "./App.css";

function App() {
  //const arr = ["aman","ramya","adarsh","tanuj","bhabya"]

  // const details = [
  //   { id: 0, name: "aman", age: 21 },
  //   { id: 1, name: "varsha", age: 22 },
  //   { id: 2, name: "aditya", age: 23 },
  // ];

  const array=[
    ["html","css","js"],
    ["node js","express js","aws"]
  ]

  return (
    <>
    {/* Normal array */}
      {/* <div>
      {arr.map((value,id)=>{
        return <h2 key={id}>{value}</h2>;
      })}
      </div> */}

      {/* Array of object */}
      {/* <div>
        {details.map((user,index) => {
          console.log(user);
          return (
            <div key={index}>
              <p >{user.id}</p>
              <h2> {user.name}</h2>
              <p >{user.age}</p>
            </div>
          );
        })}
      </div> */}

      <div>
        {array.map((value,index)=>{
          console.log(value)
          return (
            <div key={index}>
            {value.map((nestedArray,index)=>{
             return <h1 key={index}>{nestedArray}</h1>
            })}
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
