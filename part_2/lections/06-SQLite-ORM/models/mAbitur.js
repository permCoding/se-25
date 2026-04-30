const { DataTypes } = require('sequelize');
const sequelize = require('./mDataBase');

// модель данных
const Abitur = sequelize.define('Abitur', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    gender: {
        type: DataTypes.BOOLEAN,  // true = мужской, false = женский
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'abiturs', // задаём имя таблицы
    timestamps: false // не добавляй createdAt и updatedAt
});

module.exports = Abitur;

/*
    timestamps: true  <---- это по умолчанию
    добавит к модели поля createdAt и updatedAt
        "createdAt" DATETIME,   -- ← добавит автоматически
        "updatedAt" DATETIME    -- ← добавит автоматически
    это нужно для логирования
*/