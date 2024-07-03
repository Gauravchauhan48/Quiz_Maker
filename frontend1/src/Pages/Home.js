import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <h1 className='w-full  font-extrabold text-4xl text-center rounded-lg'>Welcome to the Quiz Maker</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='flex justify-evenly'>

                <Link className=' className="
          bg-emerald-400 
          text-white 
          p-3 
         font-extrabold text-2xl
          rounded 
          transition 
          duration-300 
          ease-in-out 
          transform 
          hover:bg-emerald-500 
          hover:scale-110 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-opacity-75' to="/login">Login</Link>
                <Link
                    className=' className="
          bg-fuchsia-400 
          text-white 
          p-3 
         font-extrabold text-2xl
          rounded 
          transition 
          duration-300 
          ease-in-out 
          transform 
          hover:bg-fuchsia-500 
          hover:scale-110 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-opacity-75'
                    to="/signup1">Sign Up</Link>
            </div>

        </div>
    );
};

export default Home;


