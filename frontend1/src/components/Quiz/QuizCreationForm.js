import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';


const QuizCreationForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answers: ['', '', '', ''], correctAnswer: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const res = await api.post('/createQuiz', { title, description, questions }, {
                headers: { Authorization: `Bearer ${token}` }

            });
            console.log(res);
            if (res.request.status === 201) {
                navigate('/')
            }

            // Handle response and provide feedback to the user
        } catch (error) {
            console.error('Quiz creation failed:', error.response.data);
        }
    };

    return (
        <div>
            {/* <h2>Create a New Quiz</h2> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Quiz Title"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                {questions.map((q, idx) => (
                    <div key={idx}>
                        <input
                            type="text"
                            value={q.question}
                            onChange={(e) => {
                                const newQuestions = [...questions];
                                newQuestions[idx].question = e.target.value;
                                setQuestions(newQuestions);
                            }}
                            placeholder="Question"
                            required
                        />
                        {q.answers.map((a, aIdx) => (
                            <input
                                key={aIdx}
                                type="text"
                                value={a}
                                onChange={(e) => {
                                    const newQuestions = [...questions];
                                    newQuestions[idx].answers[aIdx] = e.target.value;
                                    setQuestions(newQuestions);
                                }}
                                placeholder={`Answer ${aIdx + 1}`}
                                required
                            />
                        ))}
                        <input
                            type="text"
                            value={q.correctAnswer}
                            onChange={(e) => {
                                const newQuestions = [...questions];
                                newQuestions[idx].correctAnswer = e.target.value;
                                setQuestions(newQuestions);
                            }}
                            placeholder="Correct Answer"
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addQuestion}>Add Question</button>
                <br></br>
                <button type="submit" onClick={handleSubmit}>Save Quiz</button>
            </form>
        </div>
    );
};

export default QuizCreationForm;
