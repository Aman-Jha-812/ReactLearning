//import React from 'react'

const Popup = ({popup,setPopup,title,discription}) => {
  return (
    <div>
      {
      popup && (
        <div className='absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
          <button className='btn-primary absolute top-[1rem] right-[1rem]' onClick={()=>{
            setPopup(false)
          }}>❌</button>

          <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl'>

            <h1> ⚠️{title}</h1>
            <p>{discription}</p>

            <div className='flex justify-center gap-3'>
              <button className='btn-primary'>No</button>
              <button  className='btn-primary'>Yes</button>
            </div>
          </div>

        </div>

       
      )
    }
    </div>
  )
}

export default Popup
