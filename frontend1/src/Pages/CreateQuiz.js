import React from 'react';
import QuizCreationForm from '../components/Quiz/QuizCreationForm';

const CreateQuiz = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-violet-500 text-center'>Create Quiz</h1>
            <QuizCreationForm />
        </div>
    );
};

export default CreateQuiz;
