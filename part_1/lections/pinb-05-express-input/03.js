const express = require('express'); // npm i express
const { HOST, PORT } = { "HOST": "localhost", "PORT": 3000 };

const app = express();
app.use(express.static('css')); // путь к статичным файлам
app.use(express.json()); // читать объекты в JSON
app.use(express.urlencoded({ extended: true })); // читать объекты в POST

app.post('/', (req, res) => {
    let num = +req.body.inputNumber;  // данные берутся из объекта body
    let hex = num.toString(16).toUpperCase();
    res.send(`
        <link rel="stylesheet" type="text/css" href="style.css" />
        <div id="output">Результат: ${num}(10) => ${hex}(16)</div>
        <a href="/" class="btn-style">На главную</a>`
    );
});

app.get('/', (req, res) => {
    let html = `
        <form method="POST" action="/">
            <input type="text" name="inputNumber" size="16" required /> 
            <br><br>
            <button type="submit">Перевести в 16-ю СС</button>
        </form>`;
    res.send(html);
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

/*
<!-- 
    в каждом объекте на web-форме должен быть атрибут
    "name", по которому и будет добавляться поле
    в объект req.body - из него уже на строне сервера
    можно будет получить значение, например:
    если на web-форме - name="lastName" 
    то в объекте - req.body.lastName = "____"
-->
*/