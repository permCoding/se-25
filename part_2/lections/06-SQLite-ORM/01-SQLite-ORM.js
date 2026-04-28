// Object-Relational Mapping - объектно-реляционное отображение
const express = require('express');
const HOST = 'localhost', PORT = 3000;
const { Sequelize, DataTypes, fn, col, literal } = require('sequelize');

const log = console.log;

const abitursOld = require('./data/abiturs.json');
const abitursAdd = [
    { lastName: 'Иванов', rating: 250, gender: true, birthDate: '2000-05-15', city: 'Москва' },
    { lastName: 'Петрова', rating: 230, gender: false, birthDate: '2001-08-22', city: 'Москва' },
    { lastName: 'Сидоров', rating: 210, gender: true, birthDate: '1999-12-10', city: 'Питер' },
    { lastName: 'Козлова', rating: 240, gender: false, birthDate: '2000-03-18', city: 'Питер' }
];
const abiturs = [...abitursOld, ...abitursAdd];


async function main() {
    const sequelize = new Sequelize({ // настроим подключение к БД
        dialect: 'sqlite',
        storage: './data/database.sqlite'
    });

    const Abitur = sequelize.define('Abitur', { // опишем модель данных - таблицу в БД
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
        tableName: 'abiturs',
        timestamps: false  // отключаем createdAt/updatedAt
    });

    // ==================== 3. СИНХРОНИЗАЦИЯ (СОЗДАНИЕ ТАБЛИЦЫ) ====================
    await sequelize.sync({ force: true }); // force: true — удалит таблицу, если была, и создаст заново
    console.log('✅ Таблица создана');

    // ==================== 4. ДОБАВЛЕНИЕ ДАННЫХ (CREATE) ====================
    await Abitur.bulkCreate(abiturs);
    console.log('✅ Данные добавлены');

    // ==================== 5. ЧТЕНИЕ ДАННЫХ (READ) ====================
    const users = await Abitur.findAll();
    console.table(users.map(u => u.toJSON()));

    // ==================== 6. ЗАПРОС С УСЛОВИЕМ ====================
    const topUsers = await Abitur.findAll({
        where: {
            rating: { [Sequelize.Op.gt]: 220 }  // rating > 220
        },
        order: [['rating', 'DESC']]
    });
    console.log('\n✅ Рейтинг > 220:');
    console.table(topUsers.map(u => ({ lastName: u.lastName, rating: u.rating })));

    // ==================== 7. ОБНОВЛЕНИЕ (UPDATE) ====================
    await Abitur.update(
        { rating: 260 },
        { where: { lastName: 'Иванов' } }
    );
    console.log('✅ Обновлён рейтинг Иванова');

    // ==================== 8. УДАЛЕНИЕ (DELETE) ====================
    await Abitur.destroy({ where: { lastName: 'Козлова' } });
    console.log('✅ Козлова удалена');

    await Abitur.destroy({ where: { rating: 'error' } });
    console.log('✅ запись error удалена');

    // ==================== 9. ТОП-3 ПО ГОРОДАМ (сложный запрос) ====================
    const top3PerCity = await Abitur.findAll({
        attributes: [
            'city',
            'lastName',
            'rating',
            [literal('ROW_NUMBER() OVER (PARTITION BY city ORDER BY rating DESC)'), 'rn']
        ],
        order: [['city', 'ASC'], ['rating', 'DESC']]
    });

    // Фильтруем топ-3 в JavaScript (для простоты)
    const groupedByCity = {};
    top3PerCity.forEach(row => {
        const city = row.city;
        if (!groupedByCity[city]) groupedByCity[city] = [];
        if (groupedByCity[city].length < 3) {
            groupedByCity[city].push({ lastName: row.lastName, rating: row.rating });
        }
    });

    console.log('\n🏆 ТОП-3 по городам:');
    for (const [city, users] of Object.entries(groupedByCity)) {
        console.log(`\n${city}:`);
        users.forEach(u => console.log(`  - ${u.lastName} (${u.rating})`));
    }

    // ==================== 10. ЗАПУСК EXPRESS ====================
    const app = express();

    app.get('/users', async (req, res) => {
        const users = await Abitur.findAll();
        res.json(users);
    });

    app.get('/top', async (req, res) => {
        const users = await Abitur.findAll({
            order: [['rating', 'DESC']],
            limit: 5
        });
        res.json(users);
    });

    app.listen(PORT, HOST, () => {
        log(`http://${HOST}:${PORT}/users`);
        log(`   - GET /users — все пользователи`);
        log(`   - GET /top — топ-5 по рейтингу`);
    });
}

main();
