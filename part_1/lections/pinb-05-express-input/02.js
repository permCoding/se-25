const express = require('express'); // npm i express
const { HOST, PORT } = { "HOST": "localhost", "PORT": 3000 };

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    let { inputNumber } = req.body;  // данные берутся из объекта body
    let hex = Number(inputNumber).toString(16).toUpperCase();
    res.send(`результат -> ${hex}<br>
        <a href="/">На главную</a>`
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
