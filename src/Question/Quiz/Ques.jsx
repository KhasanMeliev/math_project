import { useEffect, useState } from "react";
import "./QuesStyle.css";
import quizData from "../../quizData";

function Ques() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestionClick = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestion]);

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          Siz {quizData.length} ta savoldan {score} tasiga javob berdingiz.{" "}
          <br />
          Sizning ko'rsatkichingiz {Math.floor((score * 100) / quizData.length)}
          %
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Savol {currentQuestion + 1} / {quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].answers.map((answer) => (
              <button
                key={answer}
                onClick={() => handleAnswerClick(answer)}
                className={`answer-button ${
                  selectedAnswer === answer ? "selected" : ""
                }`}
              >
                {answer}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestionClick}
            disabled={!selectedAnswer}
            className="next-button"
          >
            Keyingi Savol
          </button>
        </>
      )}
    </div>
  );
}

export default Ques;
