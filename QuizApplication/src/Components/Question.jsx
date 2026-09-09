import { useState } from 'react'
import questions from './question.json'

const Question = ({ setIsOver, score, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentQuestion = questions[currentIndex]

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1)
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setIsOver(true)
    }
  }

  return (
    <div className="w-full max-w-md">
      {/* अगर JSON में quesiton लिखा है तो quesiton रहने दें, वर्ना question करें */}
      <h2 className="mt-8 mb-4 text-xl font-bold text-center">
        {currentQuestion.question || currentQuestion.quesiton}
      </h2>

      <div className="flex flex-col gap-3">
        {currentQuestion.option.map((option) => (
          <button
            className="p-2 rounded bg-amber-300 hover:bg-amber-400 transition-all font-medium"
            key={option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question