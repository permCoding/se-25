const express = require('express');
const { HOST, PORT } = { HOST: 'localhost', PORT: 3000 };
const log = console.log;
const app = express();

// нам нужно передать через req.body - объект нового пользователя
app.use(express.json()); // для парсинга application/json
app.use(express.urlencoded({ extended: true })); // для парсинга form-data

const users = [
    {id: 1, name: 'Alice'}, 
    {id: 2, name: 'Bob'}
];

app.post('/users/addUser', (req, res) => {
    const { id, name } = req.body; // надо бы контролировать деструктуризацию
    log(req.body);
    const newUser = { id, name };
    users.push(newUser);
    res
        .status(201)
        .json(users);
}); // через ThunderClient отправляем POST запрос

app.get('/users/order/:field/:direct', (req, res) => {
    const field = req.params.field; // нужна вализация
    const d = req.params.direct === 'asc'? +1: -1;
    res
        .status(200)
        .json(users
            .toSorted((a, b) => a[field] > b[field]? +d: -d)
        );
}); // http://localhost:3000/users/order?field=id&direct=asc

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    // нестрогое сравнение, чтобы не переводить строку "2" в число 2
    // if (user) { } else { } // нужно проверять найденного
    res
        .status(200)
        .json(user);
}); // http://localhost:3000/users/2

app.get(['/users', '/'], (req, res) => {
    res.json(users);
}); // http://localhost:3000/users

app.listen(PORT, HOST, log(`http://${HOST}:3000/`));

/*
        ['/users', '/']

для добавления нового пользователя через Thunder Client
{ 
    "id": 1002,
    "name": "White Rabbit"
}

orderBy
http://localhost:3000/orderBy?field=id&direct=asc
*/