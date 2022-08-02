const sequelize = require("sequelize");

const Sequelize = new sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = Sequelize