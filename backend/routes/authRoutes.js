const express = require('express');
const { signup, login } = require('../controllers/authController');
const { sendotp, verify } = require('../controllers/otp')
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/send-otp', sendotp);
router.post('/verify-otp', verify);

module.exports = router;































