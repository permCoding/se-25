const express = require('express');
const app = express();
const HOST = 'localhost';
const PORT = 3000;


const index = (req, resp) => { resp.send(' = toDec("1101", 2)') };
const smart = (req, resp) => { resp.send(' = smart = \nGet') };
const listen = () => { console.log(`http://${HOST}:${PORT}/`) };


app.get('/', index);

app.get('/smart', smart);

app.listen(PORT, HOST, listen); // http://localhost:3000/
