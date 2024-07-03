import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const { data } = await api.get('/quizzes');
                setQuizzes(data);
            } catch (error) {
                console.error('Failed to fetch quizzes:', error.response.data);
            }
        };
        fetchQuizzes();
    }, []);

    return (
        <div>
            <h2 className='   border-b-4 font-bold text-violet-600 text-3xl text-center rounded-lg'>Available Quizzes</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        <Link className='text-2xl font-light' to={`/quiz/${quiz._id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
