const express = require('express');
const { HOST, PORT } = { HOST: 'localhost', PORT: 3000 };
const log = console.log;
const app = express();

const users = [
    {id: 1, name: 'Alice'}, 
    {id: 2, name: 'Bob'}
];

app.get('/users', (req, res) => {
    res.json(users);
}); // http://localhost:3000/users

app.post('/users', (req, res) => {
    res
        .status(201)
        .json({message: 'User created'});
}); // через ThunderClient отправляем POST запрос

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    log(userId); // для контроля
    const user = {
        id: userId, 
        name: 'User ' + userId
    };
    res.json(user);
}); // http://localhost:3000/users/2

app.get('/', (req, res) => {
    res.send('= USERS = ');
});

app.listen(PORT, HOST, log(`http://${HOST}:3000/`));

/* 
    эндпойнты: 
GET  /users     - получить список пользователей
POST /users     - создать нового пользователя
GET  /users/:id - получить пользователя по id
GET  /          - главная страница
*/