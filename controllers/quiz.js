const db = require("../models")
const Quiz = db.quizzes;


// Menambahkan Quiz
exports.create = async(req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz telah dibuat.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    } finally {
        res.json({
            message: "error ya error, jadi ya jadi"
        })
    }
}

// Menampilkan semua data quiz
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quiz berhasil diambil",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//Mengubah data sesuai id
exports.update = async (req, res)=> {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quiz berhasil di update",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "ERROR AWIAWAOWAOKKA",
            data: null,
        });
    }
}
//Menghapus data sesuai id 
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})

        quiz.destroy()

        res.json({
            message: "Quiz berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "ERROR AKWOAKWAKOWAKOA",
            data: null,
        });
    }
}

//Menampilkan data by id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quiz berhasil di ambil dengan id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "YAELAH ERROR",
            data: null, 
        });
    }
};

//Menampilkan data quiz dari kategori
exports.getByCategoryId = async (req, res)=> {
    const id = req.params.id

    try {
        const quizzes = await Quiz.findAll({
            where : {
                categoryId: id
            }
        })
        res.json({
            message: `Quiz berhasil di ammbil dengan categoryId=${id}.`,
            data : quizzes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "ERROR AKOWOKWAKO",
            data: null
        })
    }
    
}

//Menampilkan data quiz by level
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Quiz berhasil di ambil dengan categoryId=${id}.`,
    });
}