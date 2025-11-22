const QuizResultModal = ({ isCorrect, explanation, onNextQuestion }) => {
    return (
        <div className="quiz-modal-overlay">
            <div className={`quiz-modal ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="modal-header">
                    <span className="modal-icon">{isCorrect ? '💡' : '😔'}</span>
                    <h3 className="modal-title">{isCorrect ? '정답입니다!' : '틀렸어요..'}</h3>
                    <button className="next-button" onClick={onNextQuestion}>
                        다음 +
                    </button>
                </div>
                <div className="modal-body">
                    <p className="explanation-label">설명 ~~</p>
                    <p className="explanation-text">{explanation}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizResultModal