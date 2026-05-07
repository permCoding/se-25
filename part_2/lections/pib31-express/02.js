const express = require('express');
const users = require('./json/users.json');
const { HOST, PORT } = require('./config.json').hosting.development;

const app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static('css'));

app.use(express.json()); // из строки запроса парсит объект и добавл его в req.body
app.use(express.urlencoded({ extended: true })); // из web-формы собирает объект

const getModel = (req) => {
    return { 
        field: req.body?.field ?? '', 
        direct: req.body?.direct ?? '', // по возрастанию
        limit: req.body?.limit ?? 190, // req.body.limit || 190
        arrayUsers: []
    };
}

app.get(['/users','/'], (req, res) => {
    const model = getModel(req);
    model.arrayUsers = [...users];
    res.render('vUsers', model);
});

app.post('/users/order', (req, res) => {
    const model = getModel(req);
    const f = model.field, d = model.direct == 'asc'? +1: -1;
    model.arrayUsers = users.toSorted((a, b) => { 
        if (a[f] < b[f]) return -d;
        if (a[f] > b[f]) return +d;
        return 0;
    });

    res.render('vUsers', model);
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));



/* => алгоритм express.json():
- принимает request POST с заголовком Content-Type: application/json
- парсит строку запроса, переводит JSON-строку в JavaScript-объект
- добавляет его к req.body 

   => алгоритм express.urlencoded({ extended: true }):
- принимает request POST с заголовком Content-Type: application/x-www-form-urlencoded
- собирает данные с HTML-формы в объект req.body

extended: true - позволяет передавать вложенные объекты 
  user[name]=Иван&user[age]=25  =>  { user: { name: 'Иван', age: 25 } }
extended: false - позволяет передавать простые объекты - пары ключ-значение
  name=Иван&age=25  =>  { name: 'Иван', age: 25 }
*/


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