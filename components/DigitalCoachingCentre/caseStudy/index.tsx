"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Option = { text: string; isCorrect: boolean }
type Question = { text: string; options: Option[] }

const questions: Question[] = [
  {
    text: "(i) Who climbs the maximum number of stairs?",
    options: [
      { text: "(a) Jai", isCorrect: false },
      { text: "(b) Jameel", isCorrect: false },
      { text: "(c) Jony", isCorrect: true },
    ],
  },
  {
    text: "(ii) How many times can they meet in between on the same stair?",
    options: [
      { text: "(a) 4", isCorrect: true },
      { text: "(b) 5", isCorrect: false },
      { text: "(c) Jai and Jameel", isCorrect: false },
      { text: "(d) Never", isCorrect: false },
    ],
  },
  {
    text: "(iii) Who takes the least number of attempts to reach near the 100th stair?",
    options: [
      { text: "(a) Jai", isCorrect: false },
      { text: "(b) Jony", isCorrect: true },
      { text: "(c) Jameel", isCorrect: false },
      { text: "(d) None", isCorrect: false },
    ],
  },
  {
    text: "(iv) What is the first stair where any two out of three will meet together?",
    options: [
      { text: "(a) Jai and Jameel will meet for the first time after 15 steps.", isCorrect: true },
      { text: "(b) Jameel and Jony will meet for the first time after 35 steps.", isCorrect: false },
      { text: "(c) Jai and Jony will meet for the first time after 21 steps.", isCorrect: false },
      { text: "(d) Jai and Jameel will meet for the first time after 21 steps.", isCorrect: false },
    ],
  },
  {
    text: "(v) What is the second stair where any two out of three will meet together?",
    options: [
      { text: "(a) Jai and Jameel will meet after 21 steps.", isCorrect: true },
      { text: "(b) Jameel and Jony will meet after 35 steps.", isCorrect: false },
      { text: "(c) Jai and Jameel will meet after 21 steps.", isCorrect: false },
      { text: "(d) Jai and Jony will meet after 35 steps.", isCorrect: false },
    ],
  },
]

export default function CaseStudyQuiz() {
  const [name, setName] = useState("")
  const [startQuiz, setStartQuiz] = useState(false)
  const [selected, setSelected] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [showResult, setShowResult] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleSelect = (qIndex: number, oIndex: number) => {
    if (showResult) return
    const updated = [...selected]
    updated[qIndex] = oIndex
    setSelected(updated)
  }

  const handleSubmit = () => {
    setShowResult(true)
    setShowPopup(true)
  }

  const score = selected.filter((sel, i) => sel !== null && questions[i].options[sel]?.isCorrect).length

  return (
    <div className="max-w-3xl mx-auto p-6">
      {!startQuiz ? (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold text-center">Enter Your Name to Start Quiz</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="px-4 py-2 border rounded w-64 text-lg text-center"
          />
          <button
            onClick={() => name.trim() && setStartQuiz(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <>
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 leading-relaxed text-justify break-words">
    Jai, Jameel and Jony decided to play a game of climbing 100 stairs. Jai climbs 5 stairs and gets down 2 stairs in one turn, Jameel goes up by 7 stairs and comes down by 2 stairs in a turn, Jony goes 10 stairs up and 3 stairs down each time. Each one of them stops when less number of stairs are left than the number of stairs for his forward movement.
  </p>

          <h1 className="text-3xl font-bold mb-6 text-center bg-yellow-100">CASE STUDY QUIZ</h1>

          {questions.map((q, i) => (
            <div key={i} className="mb-6 p-4 border rounded-lg shadow-sm">
              <p className="font-semibold mb-3">{q.text}</p>
              <div className="flex flex-col gap-2">
                {q.options.map((o, j) => {
                  const isSelected = selected[i] === j
                  const bgColor = showResult
                    ? o.isCorrect
                      ? "bg-green-200"
                      : isSelected
                        ? "bg-red-200"
                        : "bg-white"
                    : isSelected
                      ? "bg-blue-100"
                      : "bg-white"

                  return (
                    <button
                      key={j}
                      className={`p-2 border rounded text-left ${bgColor} hover:bg-blue-50 transition`}
                      onClick={() => handleSelect(i, j)}
                      disabled={showResult}
                      aria-label={o.text}
                    >
                      {o.text}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          {!showResult && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          )}

          {/* Animated Popup Modal using framer-motion */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-center">Quiz Result</h2>
                  <p className="mb-2 text-center">
                    Hello, <span className="font-semibold">{name}</span>!
                  </p>
                  <p className="mb-4 font-semibold text-center">
                    Your Score: {score} / {questions.length}
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}
