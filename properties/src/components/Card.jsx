

const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      {/* <h2>{props.name}</h2>
      <h3>{props.age}</h3> */}
      
    </div>
  )
}

//destructuring way for props

const Info = ({name,age,data}) => {
    console.log(name,age,data)
  return (
    <div className="information">
      <h3>{name}</h3>
      <h4>{age}</h4>
      {data}

      
    </div>
  )
}

export {Card,Info}



