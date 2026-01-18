const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;

const app = express();

const view = '<%= lastName %>';

app.get('/', (req, res) => {
    let user = { 'id': 123, 'lastName': 'Иванов' };
    let html = ejs.render(view, user);
    console.log(html);

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

/*
http://localhost:3000/
- проверить через браузер
- и через расширение ThunderClient

если запуск (F8 или своё сочетание) через расширение Nodejs exec
то остановка процесса через F9 (или своё сочетание) или на уровне ОС

для лучшего контроля лучше запускать через терминал (встроенный в VS Code терминал)
*/