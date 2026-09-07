// import React from 'react'

const Button = ({title,func}) => {
  return (
    <div >
     
      <button onClick={func}>{title}</button>
    </div>
  )
}

export default Button
