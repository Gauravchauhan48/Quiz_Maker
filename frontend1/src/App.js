import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import CreateQuiz from './Pages/CreateQuiz';
import TakeQuiz from './Pages/TakeQuiz';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Login1 from './Login1';
// import Appimage from './data/Appimage.png'

const App = () => {
  return (
    <div className='w-full h-screen '>
      {/* <Login1></Login1> */}
      {/* <input type="text"></input> */}
      <Routes>

        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/signup1" element={<Login1></Login1>} />
        <Route path="/dashboard/:id" element={<Dashboard></Dashboard>} />
        <Route path="/create-quiz" element={<CreateQuiz></CreateQuiz>} />
        <Route path="/quiz/:id" element={<TakeQuiz></TakeQuiz>} />

      </Routes>
    </div>

  );
};

export default App;


