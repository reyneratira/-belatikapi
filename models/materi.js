module.exports = (sequlize, Sequlize) => {
    const Materi = sequlize.define('materi', {
        judul: {
            type: Sequlize.STRING,
        },
        image: {
            type: Sequlize.TEXT,
        },
        isi: {
            type: Sequlize.TEXT,
        },
        isi2: {
            type: Sequlize.TEXT,
        },
        isi3: {
            type: Sequlize.TEXT,
        },
        isi4: {
            type: Sequlize.TEXT,
        },
        isi5: {
            type: Sequlize.TEXT,
        },
        isi6: {
            type: Sequlize.TEXT,
        },
    });
    return Materi;
}