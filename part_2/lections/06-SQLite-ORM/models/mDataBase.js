const { Sequelize } = require('sequelize');

// подключение к БД
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/db.sqlite',
    logging: (msg) => { // Логировать только ошибки, но не SQL-запросы
        if (msg.includes('ERROR')) {
            console.log(msg);
        }
    }
});

module.exports = sequelize;

// logging: false  // вообще отключить логгирование при работе с БД