"use client"

import { useState } from "react";

const questions = [
  { id: 1, question: "How are you feeling today?" },
  { id: 2, question: "What’s something that made you happy recently?" },
  { id: 3, question: "What’s your biggest challenge right now?" },
  { id: 4, question: "What’s a goal you want to achieve soon?" },
  { id: 5, question: "What motivates you to keep going?" },
];

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 bg-gray-100 text-center">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold">{questions[currentQuestion].question}</h2>
        <textarea
          className="w-full mt-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your answer here..."
          value={answers[currentQuestion]}
          onChange={handleChange}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`py-2 px-4 rounded-lg shadow ${
              currentQuestion === 0 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
            }`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className={`py-2 px-4 rounded-lg shadow ${
              currentQuestion === questions.length - 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
}
