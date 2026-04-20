const express = require('express');
const rUser = require('./routers/rUser');
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
app.use('/user', rUser); // подключили роутер
app.use(['/users','/'], rUsers); // подключили роутер
app.use(mwUsers.notFound);  // 404

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

/*
curl -X GET http://localhost:3000/users
curl http://localhost:3000/users



curl -X POST http://localhost:3000/users/order \
    -H "Content-Type: application/json" \
    -d '{"field":"rating","direct":"asc"}'
curl -X POST http://localhost:3000/users/order \
    -H "Content-Type: application/json" \
    -d '{"field":"lastName","direct":"desc"}'
curl -X POST http://localhost:3000/users/order \
    -d "field=lastName" \
    -d "direct=asc"


    => если с латиницей:
curl -X POST http://localhost:3000/user/saveUser \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Аlber","lastName":"Camus","rating":233}'
    => если с кириллицей - то из файла:
curl -X POST http://localhost:3000/user/saveUser \
  -H "Content-Type: application/json; charset=utf-8" \
  --data @./json/user.json
*/