const dbConfig = require('../config/db');
const Sequlize = require('sequelize');
const sequelize = new Sequlize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.mix,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db = {};
db.Sequlize = Sequlize;
db.sequelize = sequelize;

db.quizzes = require('./quiz')(sequelize, Sequlize);
db.material = require('./materi')(sequelize, Sequlize);
module.exports = db;