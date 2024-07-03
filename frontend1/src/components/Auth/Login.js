import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/login', { email, password });
            toast.success('Login successful');
            console.log("token", data);
            localStorage.setItem('username', data.username);
            localStorage.setItem('user', data._id);
            localStorage.setItem('token', data.token);

            setTimeout(() => {
                history(`/dashboard/${data._id}`);
            }, 1000);
            // history(`/dashboard/${data._id}`);

        } catch (error) {
            // window.alert("Invalid Email or Password")

            toast.error('Invalid username or password');
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-violet-500 text-center'>Login</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
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

export default Login;
