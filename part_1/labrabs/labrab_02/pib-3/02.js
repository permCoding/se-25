const express = require('express'); // npm i express
const { getLines } = require('./utils');

const app = express();

const [ HOST, PORT ] = [ 'localhost', 5432 ];

app.get('/:filename', (req, res) => {
    try {
        let path = `./files/${req.params.filename}`;
        let lines = getLines(path);
        // writeToFile('_' + path, lines);
        res.type('text/html');
        res.send(`${lines.join('<br>')}`);        
    } catch (error) {
        res.send('ошибка обработки файла...');
    } 
});

app.get('/', (req, res) => 
    res.send(`labrab_02`)
);

app.listen(PORT, HOST, () => 
    console.log(`http://${HOST}:${PORT}/`)
);
