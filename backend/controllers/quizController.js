const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
    const { title, description, questions } = req.body;
    console.log("called quizzzz");
    try {
        const quiz = await Quiz.create({
            title,
            description,
            questions,
            createdBy: req.user._id,
        });
        console.log("quiz---->>", quiz);
        res.status(201).json(quiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.json(quiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.submitQuiz = async (req, res) => {
    const { answers } = req.body;
    const { id } = req.params;
    console.log("submit quiz called-->>");
    try {
        const quiz = await Quiz.findById(id);

        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        let score = 0;

        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });
        console.log("score-->>", score);

        res.json({ score });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



