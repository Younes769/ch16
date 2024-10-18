import React from "react";
import { useState } from "react";
function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },

    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },

    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Spain?",
      answerOptions: [
        { answerText: "Madrid", isCorrect: true },
        { answerText: "Barcelona", isCorrect: false },
        { answerText: "Valencia", isCorrect: false },
        { answerText: "Seville", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Italy?",
      answerOptions: [
        { answerText: "Milan", isCorrect: false },
        { answerText: "Rome", isCorrect: true },
        { answerText: "Venice", isCorrect: false },
        { answerText: "Florence", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Germany?",
      answerOptions: [
        { answerText: "Berlin", isCorrect: true },
        { answerText: "Munich", isCorrect: false },
        { answerText: "Hamburg", isCorrect: false },
        { answerText: "Frankfurt", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Portugal?",
      answerOptions: [
        { answerText: "Lisbon", isCorrect: true },
        { answerText: "Porto", isCorrect: false },
        { answerText: "Faro", isCorrect: false },
        { answerText: "Coimbra", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of the Netherlands?",
      answerOptions: [
        { answerText: "Amsterdam", isCorrect: false },
        { answerText: "Rotterdam", isCorrect: false },
        { answerText: "The Hague", isCorrect: false },
        { answerText: "Utrecht", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Belgium?",
      answerOptions: [
        { answerText: "Brussels", isCorrect: true },
        { answerText: "Antwerp", isCorrect: false },
        { answerText: "Ghent", isCorrect: false },
        { answerText: "Bruges", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Switzerland?",
      answerOptions: [
        { answerText: "Zurich", isCorrect: false },
        { answerText: "Geneva", isCorrect: false },
        { answerText: "Bern", isCorrect: true },
        { answerText: "Basel", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Austria?",
      answerOptions: [
        { answerText: "Vienna", isCorrect: true },
        { answerText: "Salzburg", isCorrect: false },
        { answerText: "Innsbruck", isCorrect: false },
        { answerText: "Graz", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Poland?",
      answerOptions: [
        { answerText: "Warsaw", isCorrect: true },
        { answerText: "Krakow", isCorrect: false },
        { answerText: "Gdansk", isCorrect: false },
        { answerText: "Wroclaw", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Sweden?",
      answerOptions: [
        { answerText: "Stockholm", isCorrect: true },
        { answerText: "Gothenburg", isCorrect: false },
        { answerText: "Malmo", isCorrect: false },
        { answerText: "Uppsala", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Norway?",
      answerOptions: [
        { answerText: "Oslo", isCorrect: true },
        { answerText: "Bergen", isCorrect: false },
        { answerText: "Stavanger", isCorrect: false },
        { answerText: "Trondheim", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Denmark?",
      answerOptions: [
        { answerText: "Copenhagen", isCorrect: true },
        { answerText: "Aarhus", isCorrect: false },
        { answerText: "Odense", isCorrect: false },
        { answerText: "Aalborg", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Finland?",
      answerOptions: [
        { answerText: "Helsinki", isCorrect: true },
        { answerText: "Turku", isCorrect: false },
        { answerText: "Tampere", isCorrect: false },
        { answerText: "Oulu", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Russia?",
      answerOptions: [
        { answerText: "Moscow", isCorrect: true },
        { answerText: "St Petersburg", isCorrect: false },
        { answerText: "Novosibirsk", isCorrect: false },
        { answerText: "Yekaterinburg", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of China?",
      answerOptions: [
        { answerText: "Beijing", isCorrect: true },
        { answerText: "Shanghai", isCorrect: false },
        { answerText: "Guangzhou", isCorrect: false },
        { answerText: "Shenzhen", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Japan?",
      answerOptions: [
        { answerText: "Tokyo", isCorrect: true },
        { answerText: "Osaka", isCorrect: false },
        { answerText: "Kyoto", isCorrect: false },
        { answerText: "Yokohama", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of South Korea?",
      answerOptions: [
        { answerText: "Seoul", isCorrect: true },
        { answerText: "Busan", isCorrect: false },
        { answerText: "Incheon", isCorrect: false },
        { answerText: "Daegu", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "New Delhi", isCorrect: true },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Bangalore", isCorrect: false },
        { answerText: "Hyderabad", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Australia?",
      answerOptions: [
        { answerText: "Canberra", isCorrect: true },
        { answerText: "Sydney", isCorrect: false },
        { answerText: "Melbourne", isCorrect: false },
        { answerText: "Brisbane", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Brazil?",
      answerOptions: [
        { answerText: "Brasilia", isCorrect: true },
        { answerText: "Rio de Janeiro", isCorrect: false },
        { answerText: "Sao Paulo", isCorrect: false },
        { answerText: "Salvador", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of Argentina?",
      answerOptions: [
        { answerText: "Buenos Aires", isCorrect: true },
        { answerText: "Cordoba", isCorrect: false },
        { answerText: "Rosario", isCorrect: false },
        { answerText: "Mendoza", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of South Africa?",
      answerOptions: [
        { answerText: "Pretoria", isCorrect: false },
        { answerText: "Cape Town", isCorrect: false },
        { answerText: "Johannesburg", isCorrect: false },
        { answerText: "Bloemfontein", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Nigeria?",
      answerOptions: [
        { answerText: "Lagos", isCorrect: false },
        { answerText: "Kano", isCorrect: false },
        { answerText: "Ibadan", isCorrect: false },
        { answerText: "Abuja", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Egypt?",
      answerOptions: [
        { answerText: "Cairo", isCorrect: true },
        { answerText: "Alexandria", isCorrect: false },
        { answerText: "Giza", isCorrect: false },
        { answerText: "Luxor", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of South Africa?",
      answerOptions: [
        { answerText: "Pretoria", isCorrect: false },
        { answerText: "Cape Town", isCorrect: false },
        { answerText: "Johannesburg", isCorrect: false },
        { answerText: "Bloemfontein", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Nigeria?",
      answerOptions: [
        { answerText: "Lagos", isCorrect: false },
        { answerText: "Kano", isCorrect: false },
        { answerText: "Ibadan", isCorrect: false },
        { answerText: "Abuja", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Egypt?",
      answerOptions: [
        { answerText: "Cairo", isCorrect: true },
        { answerText: "Alexandria", isCorrect: false },
        { answerText: "Giza", isCorrect: false },
        { answerText: "Luxor", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of South Africa?",
      answerOptions: [
        { answerText: "Pretoria", isCorrect: false },
        { answerText: "Cape Town", isCorrect: false },
        { answerText: "Johannesburg", isCorrect: false },
        { answerText: "Bloemfontein", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Nigeria?",
      answerOptions: [
        { answerText: "Lagos", isCorrect: false },
        { answerText: "Kano", isCorrect: false },
        { answerText: "Ibadan", isCorrect: false },
        { answerText: "Abuja", isCorrect: true },
      ],
    },

    {
      questionText: "What is the capital of Egypt?",
      answerOptions: [
        { answerText: "Cairo", isCorrect: true },
        { answerText: "Alexandria", isCorrect: false },
        { answerText: "Giza", isCorrect: false },
        { answerText: "Luxor", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer.isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setIsQuizFinished(true);
    }
  }

  if (isQuizFinished) {
    return (
      <div className="app">
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answerOption)}
                className="answer-button"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
