// const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gauravchauhan045265@gmail.com',
        pass: 'lrnbcfsy mdoq cgfg',
    },
});

// Endpoint to send OTP
exports.sendotp = async (req, res) => {
    console.log("otp called");
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    console.log("otp-->>", otp);
    const token = jwt.sign({ otp }, 'your-secret-key', { expiresIn: '10m' }); // Token expires in 10 minutes
    console.log("token-->>", token);

    const mailOptions = {
        from: 'gauravchauhan045265@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to send OTP' });
        } else {
            res.status(200).json({ message: 'OTP sent successfully', token });
        }
    });
};

// Endpoint to verify OTP
exports.verify = async (req, res) => {
    const { otp, token } = req.body;
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        if (decoded.otp === otp) {
            res.status(200).json({ message: 'OTP verified successfully' });
        } else {
            res.status(400).json({ error: 'Invalid OTP' });
        }
    } catch (err) {
        res.status(400).json({ error: 'OTP expired or invalid' });
    }
};


