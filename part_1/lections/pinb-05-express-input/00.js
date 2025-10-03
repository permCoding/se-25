const express = require('express'); // npm i express
const { HOST, PORT } = { "HOST": "localhost", "PORT": 3000 };

const app = express();
const html = `
    <input type="text" name="inputNumber" size="8" required />
    <button type="submit">Перевести в 10-ю СС</button>`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
