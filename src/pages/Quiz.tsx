import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { categoryQuestions } from '../data/questions';

const Quiz: React.FC = () => {
  const { categoryId, difficulty } = useParams<{ categoryId: string; difficulty: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = categoryId ? categoryQuestions[categoryId] : [];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  if (!questions.length) {
    return <div>No questions found for this category</div>;
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate(`/category/${categoryId}/levels`)}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Levels
      </button>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <span className="capitalize text-gray-600">
            Difficulty: {difficulty}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-6">{question.question}</h3>

        <div className="space-y-4 mb-8">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              disabled={showAnswer}
              className={`w-full p-4 text-left rounded-lg border ${
                showAnswer
                  ? option === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : option === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50 border-gray-200'
                  : 'hover:bg-gray-50 border-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showAnswer && (
          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold mb-2">Explanation:</p>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="inline-flex items-center px-4 py-2 text-indigo-600 disabled:text-gray-400"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1 || !showAnswer}
            className="inline-flex items-center px-4 py-2 text-indigo-600 disabled:text-gray-400"
          >
            Next
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;