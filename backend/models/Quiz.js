const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answers: {
        type: [String],
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
    },
});

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: [questionSchema],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;




