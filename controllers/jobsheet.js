const db = require("../models");
const Quiz = db.quizzes;

exports.submitOne = async (req, res) => {
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try {
        var quiz = await Quiz.findOne({
            where: {
                id: req.body.quizId
            }
        });

        if (req.body.answer == quiz.key) {
            res.status(200).json({
                "message":"Benar!"
            })
        } else {
            res.status(200).json({
                "message":`jawaban benar adalah ${quiz.key}`
            })
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.submitMany = async (req, res) => {
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try {
        let benar = 0
        let totalSoal = jobsheet.quizId.length
        for (let i = 0; i < totalSoal ; i++) {
            const quiz = await Quiz.findOne({
                limit: 1,
                where: {
                    id: jobsheet.quizId[i]
                },
                order: [['id','DESC']],
            });
            if(quiz.key == jobsheet.answer[i]){
                benar = benar + 1
            }
            res.status(200).json({
                "message":`Benar ${benar} dari ${totalSoal} soal`
            })
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};