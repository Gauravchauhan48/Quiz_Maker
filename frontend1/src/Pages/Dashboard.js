import React from 'react';
import { Link } from 'react-router-dom';
import QuizList from '../components/Quiz/QuizList';


const Dashboard = () => {
    const username = localStorage.getItem('username')
    console.log("data", username);
    // toast.success('Login successful');
    return (
        <div>
            <h1 className='font-extrabold text-4xl text-center'>Dashboard</h1>
            <h2 className='font-bold text-3xl text-violet-600'>Hi 👋🏻 {username}</h2>
            <div className='flex justify-evenly '>
                <QuizList />
                <div className=''>
                    <Link to="/create-quiz" className='  
          bg-blue-500 
          text-white 
          p-3 
          rounded 
          transition 
          duration-300 
          ease-in-out 
          transform 
          hover:bg-blue-700 
          hover:scale-110 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-opacity-75'>Create a New Quiz</Link>

                </div>


            </div>


        </div>
    );
};

export default Dashboard;


