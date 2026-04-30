// Object-Relational Mapping - объектно-реляционное отображение
const express = require('express');
const HOST = 'localhost', PORT = 3000;
const log = console.log;

const rAbitur = require('./routes/rAbitur');
const mAbitur = require('./models/mAbitur');
const sequelize = require('./models/mDataBase');

const abiturs = [
    ...require('./data/abiturs.json'), 
    ...require('./data/abiturs_dop.json')
]; // тут данные для наполнения БД SQLite

async function main() {
    // Синхронизация (создание таблицы)
    await sequelize.sync({ force: true });
    log('✅ Таблица создана');

    // Добавление данных
    await mAbitur.bulkCreate(abiturs);
    log('✅ Данные добавлены');

    // Покажем всех пользователей
    const users = await mAbitur.findAll();
    log('\n📋 Все пользователи:');
    console.table(users.map(u => u.toJSON()));

    // Запуск сервера
    const app = express();
    app.use(express.json());  // для парсинга JSON в PUT-запросах
    app.use('/api', rAbitur);

    app.listen(PORT, HOST, () => {
        log(`\n🚀 Сервер запущен: http://${HOST}:${PORT}/api`);
        log(`   - GET  /api/users          — все пользователи`);
        log(`   - GET  /api/top            — топ-5 по рейтингу`);
        log(`   - GET  /api/top3           — топ-3 по городам`);
        log(`   - GET  /api/users/rating/:min — фильтр по рейтингу`);
        log(`   - PUT  /api/user           — обновить рейтинг ({"lastName":"...","newRating":...})`);
        log(`   - DELETE /api/user/:lastName — удалить пользователя`);
    });
}

main(); // для запуска в асинхронном режиме

// http://localhost:3000/api/users