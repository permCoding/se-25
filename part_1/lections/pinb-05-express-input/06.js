const express = require('express');
const { HOST, PORT } = { "HOST": "localhost", "PORT": 3000 };

const app = express();
app.use(express.static('css'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const head = `
    <head>
        <meta charset="UTF-8">
        <title>Конвертер</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
    </head>`;

const formConverter = `
    <form method="POST" action="/">
        <input type="text" name="inputNumber" size="16" required /><br><br>
        <button type="submit" class="btn-style">Перевести в 16-ю СС</button>
    </form>`;

const getHtml = (result = '') => { // генерация HTML-страницы
    return `
        <!DOCTYPE html>
        <html lang="ru">
            ${head}
            <body>
                ${formConverter}<br>
                <div id="output">${result}</div>
            </body>
        </html>`;
}

app.post('/', (req, res) => { // Обработчик POST-запроса
    let num = +req.body.inputNumber.trim();
    if (Number.isNaN(num)) { 
        res.send( getHtml("некорректные данные") );
    } else {
        let hex = num.toString(16).toUpperCase();
        let resultText = `${num}(10) => ${hex}(16)`;
        res.send( getHtml(resultText) );
    }
});

app.get('/', (req, res) => { // Обработчик GET-запроса
    res.send( getHtml() );
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
