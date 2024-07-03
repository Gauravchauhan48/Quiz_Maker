// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import api from './api';
import OtpVerification from './OtpVerification';
import { useNavigate } from 'react-router-dom';


const Login1 = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    // const navigate = useNavigate();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/send-otp', { email });
            console.log("response", data);
            window.alert("OTP sent successfully")
            // toast.success("OTP sent Successfully")
            // const response = await axios.post(`${api}/send-otp`, { email });
            setToken(data.token);
            setOtpSent(true);

        } catch (error) {
            // toast.error("OTP NOt Sent")
            console.error('Error sending OTP:', error);
        }
    };

    return (
        <div className='text-center'>
            <h2 className='text-violet-500 text-2xl font-bold text-center'>Enter Your Email</h2>
            <br></br>
            {/* <br></br> */}
            {/* gauravchauhan045265@gmail.com */}
            {/* <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>
            {otpSent && <OtpVerification token={token} />}

        </div>
    );
};

export default Login1;
