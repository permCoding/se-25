const express = require('express'); // npm i express

const app = express();

const [ HOST, PORT ] = [ 'localhost', 5432 ];

app.get('/mytask', (req, res) => 
    res.send(`express mytask`)
);

app.get('/', (req, res) => 
    res.send(`express server is running on http://${HOST}:${PORT}/`)
);

app.listen(PORT, HOST, () => 
    console.log(`http://${HOST}:${PORT}/`)
);


// http://localhost:3000/
