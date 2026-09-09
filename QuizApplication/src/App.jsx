import { useState } from 'react'
import Question from './Components/Question.jsx'
import Result from './Components/Result.jsx'
import Timer from './Components/Timer'
import './App.css'

function App() {
  const [isOver, setIsOver] = useState(false)
  const [score, setScore] = useState(0)

  const handleRestart = () => {
    setScore(0)
    setIsOver(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {!isOver ? (
        <>
          <Timer setIsOver={setIsOver} />
          <Question 
            setIsOver={setIsOver} 
            score={score} 
            setScore={setScore} 
          />
        </>
      ) : (
        <Result 
          score={score} 
          onRestart={handleRestart} 
        />
      )}
    </div>
  )
}

export default App