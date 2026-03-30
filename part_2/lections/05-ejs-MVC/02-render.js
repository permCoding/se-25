const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const users = require('./json/users.json');
const log = console.log;

const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('css')); // путь к статичным файлам

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('users-02.ejs', users[0]);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
- .set() - это настройка сервера - один раз при запуске:

const express = require('express');
const app = express();

app.set('view engine', 'ejs');     // Движок шаблонов
app.set('views', './views');       // Папка с шаблонами
app.set('port', 3000);             // Порт сервера
app.set('title', 'My App');        // Любая кастомная настройка

- .get() - это действия и настройки маршрутов
app.get('view engine'); // получить значение
app.get('/', (req, res) => { }); // обработчик маршрута

- .use() - это настройки middleware - много раз - при каждом запросе
app.use('/api', apiRouter);        // использовать роутер по пути
app.use((req, res) => {            // использовать свой middleware
    console.log('Запрос получен');
    next(); // обязательно для передачи управления следующему middleware
});
app.use(express.json()); // парсить json-строки
app.use(express.static('public')); // Статические файлы

*/