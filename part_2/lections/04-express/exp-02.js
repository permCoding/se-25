const express = require('express');
const log = console.log;

// const HOST = 'localhost', PORT = 3000; // ver.1

// const { HOST, PORT} = require('./config.json').develop; // ver.2

// .env  // ver.3
require('dotenv').config();       // npm install dotenv
// require('dotenv').config({ path: './config/.env' }); // можно менять путь
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;


const app = express();

app.get('/users', (req, res) => {
    log(req.protocol, req.ip, req.method, req.url); // убрать в middleware
    res.json([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]);
});  // эндпойнт: GET /users


app.get('/', (req, res) => {
    log(req.protocol, req.ip, req.method, req.url); // убрать в middleware
    res.send('= USERS = ');
});  // эндпойнт: GET /

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/* 
- содержимое файла .env - он не загружается на GitHub
# .env
PORT=3000
HOST=localhost

- можно загружать разные файлы в зависимости от окружения

---  

- свойства объекта request:  
req.params	    Параметры маршрута	/user/:id → req.params.id
req.query	    GET-параметры	    ?page=1 → req.query.page
req.body	    Тело запроса (POST/PUT)	{ name: "John" }
req.headers	    Все заголовки	req.headers['user-agent']
req.ip	        IP клиента	192.168.1.1
req.method	    HTTP метод	GET, POST
req.url	        Полный URL	/users?page=1
req.path	    Путь без параметров	/users
req.cookies	    Куки (с cookie-parser)	req.cookies.sessionId
req.get()	    Получить заголовок	req.get('Content-Type')
req.is()	    Проверить тип контента	req.is('json')
*/