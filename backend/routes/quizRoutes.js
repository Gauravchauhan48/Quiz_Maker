const express = require('express');
const {
    createQuiz,
    getQuizzes,
    getQuizById,
    submitQuiz,
} = require('../controllers/quizController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/createQuiz').post(protect, createQuiz);
router.route('/quizzes').get(getQuizzes);
router.route('/quiz/:id').get(getQuizById);
router.route('/quiz/:id/submit').post(submitQuiz);

module.exports = router;
























