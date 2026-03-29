const express = require('express');
const log = console.log;
const HOST = 'localhost';
const PORT = 3000;
const app = express();


app.get('/users', (req, res) => {
    res.json([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]);
});  // эндпойнт: GET /users


app.get('/', (req, res) => {
    res.send('= USERS = ');
});  // эндпойнт: GET /

app.listen(PORT, HOST, log(`http://${HOST}:${PORT}/`));
