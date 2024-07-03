import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';

const Quiz = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const { data } = await api.get(`/quiz/${id}`);
                setQuiz(data);
                setAnswers(new Array(data.questions.length).fill(''));
            } catch (error) {
                console.error('Failed to fetch quiz:', error.response.data);
            }
        };
        fetchQuiz();
    }, [id]);

    const handleAnswerChange = (e) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = e.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post(`/quiz/${id}/submit`, { answers });
            setScore(data.score);
            console.log("data-->>", data);
        } catch (error) {
            console.error('Failed to submit quiz:', error.response.data);
        }
    };

    if (!quiz) return <div>Loading...</div>;

    if (score !== null) return <div>Your score: {score} / {quiz.questions.length}</div>;

    return (
        <div>
            <h2>{quiz.title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>{quiz.questions[currentQuestionIndex].question}</p>
                    {quiz.questions[currentQuestionIndex].answers.map((answer, idx) => (
                        <label key={idx}>
                            <input
                                type="radio"
                                value={answer}
                                checked={answers[currentQuestionIndex] === answer}
                                onChange={handleAnswerChange}
                            />
                            {answer}
                            <br></br>
                        </label>

                    ))}
                </div>
                {currentQuestionIndex > 0 && (
                    <button type="button" onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>Previous</button>
                )}
                <br></br>
                {currentQuestionIndex < quiz.questions.length - 1 && (
                    <button type="button" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</button>
                )}
                {currentQuestionIndex === quiz.questions.length - 1 && <button type="submit" onClick={handleSubmit}>Submit</button>}
            </form>
        </div>
    );
};

export default Quiz;
