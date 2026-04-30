// Object-Relational Mapping - объектно-реляционное отображение
const express = require('express');
const rAbitur = require('./routes/rAbitur');
const HOST = 'localhost', PORT = 3000;
const log = console.log;

async function main() {
    const app = express();
    app.use(express.json());  // для парсинга JSON в PUT-запросах
    app.use('/api', rAbitur);
    app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/api/users`));
}

main(); // для запуска в асинхронном режиме

// http://localhost:3000/api/users

/*
GET  /api/users          — все пользователи
GET  /api/top            — топ-5 по рейтингу
GET  /api/top3           — топ-3 по городам
GET  /api/users/rating/:min — фильтр по рейтингу
PUT  /api/user           — обновить рейтинг { "lastName": "...", "newRating": ... }
DELETE /api/user/:lastName — удалить пользователя
*/