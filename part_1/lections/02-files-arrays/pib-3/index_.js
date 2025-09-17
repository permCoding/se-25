const express = require('express');
const { getLines } = require('./utils_for_server');
const app = express();
const HOST = 'localhost';
const PORT = 3000;
const dirFiles = './files/';


const index = (req, resp) => { 
    resp.send('toDec("1101", 2)\ntoDec("61", 8)');
};

const filename = (req, resp) => {
    const lines = getLines(dirFiles + req.params.filename);
    resp.set('Content-Type', 'text/plain');
    const pairs = lines
        .map(line => line.split(' '))
        .map(pair => [pair[0], +pair[1]]);
    const obj = Object.fromEntries(pairs);
    const json = JSON.stringify(obj, null, 4);
    console.log(json);
    resp.send(json);
};

const listen = () => { 
    console.log(`http://${HOST}:${PORT}/`);
};


app.get('/', index);
app.get('/filename/:filename', filename);
app.listen(PORT, HOST, listen); // http://localhost:3000/
