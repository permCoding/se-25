const express = require('express'); // npm i express
const { HOST, PORT } = require('./env.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // читать объекты в POST

app.post('/', (req, res) => {
    let { inputNumber } = req.body; // данные берутся из объекта body
    res.send(`добавили запись -> ${inputNumber}`);
});

app.get('/', (req, res) => {
    let html = `
        <form method="POST" action="/">
            <input type="text" name="inputNumber" required /> 
            <br><br>
            <button type="submit">Перевести в 16-ю СС</button>
        </form>`;
    res.send(html);
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
