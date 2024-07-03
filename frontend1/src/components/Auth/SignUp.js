import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/signup', { username, email, password });
            toast.success('Sign Up Successful!');
            console.log("data", data);
            localStorage.setItem('user', data._id)
            localStorage.setItem('username', data.username)
            // localStorage.setItem('token', data.token);
            setTimeout(() => {
                history(`/dashboard/${data._id}`);
            }, 1000)

        } catch (error) {
            toast.error('User Already Exits!');
            console.error('Sign up failed:', error.response.data);
        }
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-violet-500 text-center'>Sign Up</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default SignUp;
