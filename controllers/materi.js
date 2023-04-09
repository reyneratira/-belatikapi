const db = require("../models")
const Materi = db.material;


// Menambahkan Materi
exports.create = async(req, res) => {
    try {
        const data = await Materi.create(req.body)
        res.json({
            message: "Materi telah dibuat.",
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

// Menampilkan semua data Materi
exports.getAll = async(req, res) => {
    try {
        const materi = await Materi.findAll()
        res.json({
            message: "Materi berhasil diambil",
            data: materi,
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
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true})
        Materi.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Materi berhasil di update",
            data: materi,
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
        const materi = await Materi.findByPk(id, {rejectOnEmpty: true})

        materi.destroy()

        res.json({
            message: "Materi berhasil dihapus"
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
        const materi = await Materi.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Materi berhasil di ambil dengan id=${id}.`,
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "YAELAH ERROR",
            data: null, 
        });
    }
};