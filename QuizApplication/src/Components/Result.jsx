import React from 'react'

const Result = ({ score, onRestart }) => {
  return (
    <div className="text-center p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-2">Quiz Over! 🎉</h2>
      <p className="text-lg mb-4">
        Your Score: <span className="font-semibold text-green-600">{score}</span>
      </p>
      <button
        onClick={onRestart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Play Again
      </button>
    </div>
  )
}

export default Result