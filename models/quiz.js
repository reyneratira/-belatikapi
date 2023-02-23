module.exports = (sequlize, Sequlize) => {
    const Quiz = sequlize.define('quiz', {
        quiz: {
            type: Sequlize.STRING,
        },
        a: {
            type: Sequlize.STRING,
        },
        b: {
            type: Sequlize.STRING,
        },
        c: {
            type: Sequlize.STRING,
        },
        d: {
            type: Sequlize.STRING,
        },
        key: {
            type: Sequlize.STRING,
        },
        categoryId: {
            type: Sequlize.INTEGER,
        },
        levelId: {
            type: Sequlize.INTEGER,
        },
    });
    return Quiz;
}