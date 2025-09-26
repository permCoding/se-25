const express = require('express'); // npm i express

const app = express();

app.get('/', (req, res) => res.send('express'));

app.listen(5432, () => console.log(`http://localhost:5432/`));
