import { useEffect, useState } from "react";
import QuizResultModal from "./QuizResultModal";
import axios from "../axios/axios";
import "../styles/Quiz.css"

const Quiz = ({ onExitQuiz }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [explanation, setExplanation] = useState('');
    const [quizData, setQuizData] = useState([])

    useEffect(() => {
        const getQuizdata = async () => {
        const localUserData = localStorage.getItem("accessToken")
        const headers = {
          "authorization": `Bearer ${localUserData}`
        }
        try {
            const res = await axios.get("/api/quiz", {
                headers: headers
            })
            setQuizData(res.data)
        } catch (e) {
            console.log(e)
        }
        }
        getQuizdata()
    }, [])


    const currentQuiz = quizData[currentQuestionIndex];

    const handleAnswer = (userAnswer) => {
        const getIsCor = async () => {
            const localUserData = localStorage.getItem("accessToken")
            const headers = {
            "authorization": `Bearer ${localUserData}`
            }
            const url = `/api/quiz/${currentQuiz.quizId}/checkAnswer?userAnswer=${userAnswer}`
            try {
                const res = await axios.get(url, {
                    headers: headers
                })
                const data = res.data
                setIsCorrect(data.correct)
                setExplanation(data.explanation)
                
            } catch (e) {
                console.log(e, url)
            }
        }
        getIsCor()
        setShowResult(!showResult)
    };

    const handleNextQuestion = () => {
        setShowResult(false);
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            onExitQuiz();
            alert("퀴즈 완료! 다음 문제를 준비 중입니다.");
        }
    };

    if (!currentQuiz) return <p className="no-result">퀴즈 준비 중...</p>;

    return (
        <div className="quiz-card-container">
            <div className="quiz-card">
                <div className="quiz-question">
                    <span className="quiz-q-icon">Q</span>
                    <p>
                        <strong>{currentQuestionIndex + 1}.</strong> {currentQuiz.question}
                    </p>
                </div>

                <div className="quiz-buttons">
                    <button className="ox-button o-button" onClick={() => handleAnswer(true)} disabled={showResult}>
                        <span className="ox-icon">O</span>
                    </button>
                    <button className="ox-button x-button" onClick={() => handleAnswer(false)} disabled={showResult}>
                        <span className="ox-icon">X</span>
                    </button>
                </div>
            </div>

            {showResult && (
                <QuizResultModal
                    isCorrect={isCorrect}
                    explanation={explanation}
                    onNextQuestion={handleNextQuestion}
                />
            )}

            <button className="quiz-exit-button" onClick={onExitQuiz}>
                퀴즈 나가기
            </button>
        </div>
    );
};

export default Quiz