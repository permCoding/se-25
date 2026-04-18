const express = require('express');
const rUsers = require('./routers/rUsers-09');
const { HOST, PORT } = require('./config.json').hosting;

const app = express();

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.use(express.json()); // читать объекты в POST
app.use(express.urlencoded({ extended: true })); // объекты с ejs-шаблона

app.use('/', rUsers); // подключили роутер

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
