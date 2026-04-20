const express = require('express');
const rUsers = require('./routers/rUsers');
const mwUsers = require('./middlewares/mwUsers');
const path = require('path');
const { HOST, PORT } = require('./config.json').hosting;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.use('/css', express.static('css'));

app.use(express.json()); // читать объекты в POST
app.use(express.urlencoded({ extended: true })); // объекты с ejs-шаблона

app.use(mwUsers.logger);
app.use(mwUsers.setCharset); 
app.use('/', rUsers); // подключили роутер
app.use(mwUsers.notFound);  // 404

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
