const express = require('express'); // npm i express
const { HOST, PORT } = { "HOST": "localhost", "PORT": 3000 };

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // читать объекты в POST

app.post('/', (req, res) => {
    let { inputNumber } = req.body;  // данные берутся из объекта body
    res.send(`добавили запись -> ${inputNumber}`);
});

app.get('/', (req, res) => {
    let html = `
        <form method="POST" action="/">
            <input type="text" name="inputNumber" size="16" required /> 
            <br><br>
            <button type="submit">Перевести в 10-ю СС</button>
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