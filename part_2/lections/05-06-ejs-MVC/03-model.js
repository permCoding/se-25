const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const users = require('./json/users.json');
const log = console.log;

const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    let model = { 
        "title": 'Абитуриенты',
        "arrayUsers": users.sort((a, b) => a.rating > b.rating? +1: -1) 
    };
    res.render('users-03', model); // рендеринг страницы - заполнение view данными
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/* MVC
M - модель - это модель данных
    это представление данных предметной области в виде программного объекта
V - view - представление
    это шаблон представления в виде html-страницы
*/