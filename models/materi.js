module.exports = (sequlize, Sequlize) => {
    const Materi = sequlize.define('materi', {
        judul: {
            type: Sequlize.STRING,
        },
        gambar: {
            type: Sequlize.STRING,
        },
        isi: {
            type: Sequlize.TEXT,
        },
    });
    return Materi;
}