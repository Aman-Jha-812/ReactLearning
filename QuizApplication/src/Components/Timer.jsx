import React, { useEffect, useState } from 'react'

const Timer = ({ setIsOver }) => {
  const [leftTime, setLeftTime] = useState(30) 

  useEffect(() => {
    if (leftTime <= 0) {
      setIsOver(true)
      return
    }

    const intervalId = setInterval(() => {
      setLeftTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [leftTime, setIsOver])

  const minutes = Math.floor(leftTime / 60).toString().padStart(2, '0')
  const seconds = (leftTime % 60).toString().padStart(2, '0')

  return (
    <div className="text-lg font-semibold bg-gray-100 px-4 py-2 rounded-full border">
      ⏱️ Time Left: {minutes} : {seconds}
    </div>
  )
}

export default Timer