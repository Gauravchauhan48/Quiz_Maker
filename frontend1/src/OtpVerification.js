// OtpVerification.js
import React, { useState } from 'react';
import axios from 'axios';
import api from './api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const OtpVerification = ({ token }) => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            // const { data } = await api.post('/send-otp', { email });
            const { data } = await api.post('/verify-otp', { otp, token });
            // const response = await axios.post(`${api}/verify-otp`, { otp, token });
            if (data.message === 'OTP verified successfully') {
                toast.success("OTP verified Successfully")
                setTimeout(() => {
                    navigate('/signup')
                }, 1000)
            } else {
                // alert('Invalid OTP');
                toast.error("Invalid OTP");
            }
        } catch (error) {
            toast.error("Error in verifying OTP:")
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <div>
            <h2 className='text-violet-500 text-2xl font-bold text-center' >Verify OTP</h2>
            <br></br>
            <input

                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
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

export default OtpVerification;
